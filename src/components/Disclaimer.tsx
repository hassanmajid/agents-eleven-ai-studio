const Disclaimer = () => {
  return (
    <section className="py-6 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card/30 border border-primary/10 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              {/* Disclaimer */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Disclaimer:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  By providing your phone number to Agents Eleven, you hereby acknowledge and agree that we may send text messages to your wireless phone number for various purposes. 
                  Please note that message and data rates may apply. Message frequency will vary, and you retain the right to Opt-out by simply replying "STOP." For a detailed understanding of 
                  how we handle your data, please refer to our Privacy Policy below.
                </p>
              </div>

              {/* Privacy Policy */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Privacy Policy:</h4>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>
                    No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the categories mentioned above exclude text messaging 
                    originator opt-in data and consent, which will not be shared with any third parties.
                  </p>
                  <p>
                    To comply with industry standards and ensure the best possible experience for your customers, we kindly request that you promptly update your Contact Us page with this 
                    disclaimer and privacy policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;