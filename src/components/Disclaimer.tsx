const Disclaimer = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background/95 to-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8 md:p-12">
            <div className="space-y-8">
              {/* Disclaimer Section */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Disclaimer:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By providing your phone number to Agents Eleven, you hereby acknowledge and agree that we may send text messages to your wireless phone number for various purposes. 
                  Please note that message and data rates may apply. Message frequency will vary, and you retain the right to Opt-out by simply replying "STOP." For a detailed understanding of 
                  how we handle your data, please refer to our Privacy Policy below.
                </p>
              </div>

              {/* Privacy Policy Section */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Privacy Policy:</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
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