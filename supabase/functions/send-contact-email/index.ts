import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  designation: string;
  companyName: string;
  industry: string;
  contactNumber: string;
  email: string;
  interestedIn: string;
  comments: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, designation, companyName, industry, contactNumber, email, interestedIn, comments }: ContactEmailRequest = await req.json();

    console.log("Processing contact form submission:", { name, companyName, email, interestedIn });

    // Get SMTP credentials from environment
    const smtpHost = Deno.env.get("SMTP_HOST");
    const smtpPort = Deno.env.get("SMTP_PORT");
    const smtpUser = Deno.env.get("SMTP_USER");
    const smtpPassword = Deno.env.get("SMTP_PASSWORD");

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword) {
      throw new Error("SMTP credentials not configured");
    }

    // Create email content
    const emailBody = `
      New Contact Form Submission
      
      Name: ${name}
      Designation: ${designation}
      Company Name: ${companyName}
      Industry: ${industry}
      Contact Number: ${contactNumber}
      Email: ${email}
      Interested In: ${interestedIn}
      
      Comments:
      ${comments}
    `;

    // Use SMTP to send email
    const boundary = "----WebKitFormBoundary" + Math.random().toString(36);
    
    const emailData = [
      `From: ${smtpUser}`,
      `To: hassanmajid1996@gmail.com`,
      `Subject: New Contact Form Submission from ${name} - ${companyName}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/plain; charset=utf-8`,
      ``,
      emailBody
    ].join("\r\n");

    // Connect to SMTP server using TLS
    const conn = await Deno.connectTls({
      hostname: smtpHost,
      port: parseInt(smtpPort),
    });

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    // Helper function to read SMTP response
    const readResponse = async () => {
      const buffer = new Uint8Array(1024);
      const n = await conn.read(buffer);
      if (n === null) return "";
      return decoder.decode(buffer.subarray(0, n));
    };

    // Helper function to send SMTP command
    const sendCommand = async (command: string) => {
      await conn.write(encoder.encode(command + "\r\n"));
      return await readResponse();
    };

    // SMTP conversation
    await readResponse(); // Read server greeting
    await sendCommand(`EHLO ${smtpHost}`);
    await sendCommand(`AUTH LOGIN`);
    await sendCommand(btoa(smtpUser));
    await sendCommand(btoa(smtpPassword));
    await sendCommand(`MAIL FROM:<${smtpUser}>`);
    await sendCommand(`RCPT TO:<hassanmajid1996@gmail.com>`);
    await sendCommand("DATA");
    await conn.write(encoder.encode(emailData + "\r\n.\r\n"));
    await readResponse();
    await sendCommand("QUIT");

    conn.close();

    console.log("Email sent successfully");

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
