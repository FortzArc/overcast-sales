export function PricingSection() {
  const pricingTiers = [
    {
      title: "Devs",
      subtitle: "& Indies",
      price: "$8",
      period: "/user/mo",
      features: [
        "Plug-and-play sidecar for instant reliability",
        "Overcast SDK — scale without infra setup",
        "Auto incident reports + recovery guidance",
        "3 agents · 7-day history · community support"
      ]
    },
    {
      title: "Startups",
      subtitle: "& SMBs",
      price: "$50",
      period: "/user/mo",
      features: [
        "Compliance-ready audit trails + secure logging",
        "Advanced tracing + multi-agent RCA",
        "Automated postmortems into Jira/Confluence",
        "10 agents · 30-day history · 99.9% SLA"
      ]
    },
    {
      title: "Enterprise",
      subtitle: "",
      price: "Custom",
      period: "",
      features: [
        "Unlimited agents + custom integrations",
        "HIPAA/FedRAMP compliance + on-prem options",
        "Predictive analytics + full observability mesh",
        "24/7 support · 1-year+ history · 99.99% SLA"
      ]
    }
  ]

  return (
    <section id="pricing" className="py-12 md:py-16 font-[family-name:var(--font-poppins)]">
      <div className="max-w-[1600px] w-full mx-auto px-4 md:px-0">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-6 md:mb-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light">
            Pricing
          </h2>
          <a 
            href="https://calendly.com/raghavb5120/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl underline transition-all"
          >
            Talk to us
          </a>
        </div>

        {/* Pricing Tiers - Horizontal Layout */}
        <div className="flex flex-col gap-4 md:gap-6">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="border-2 md:border-4 border-white bg-black flex flex-col md:flex-row p-[5px]">
              {/* Tier Name - Black Box on Left */}
              <div className={`flex-shrink-0 flex flex-col justify-center items-start bg-black w-full md:w-[180px] lg:w-[220px] xl:w-[260px] ${tier.title === "Enterprise" ? "p-[10px]" : "p-3 md:p-4 lg:p-6"}`}>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight text-white">
                  {tier.title}
                </h3>
                {tier.subtitle && (
                  <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight text-white">
                    {tier.subtitle}
                  </h3>
                )}
              </div>

              {/* Pricing and Features - Blue Box on Right */}
              <div className="flex-1 bg-gradient-to-br from-[#1c87ec] via-[#6ec5eb] via-[#007cca] to-[#c5e3ff] p-3 md:p-4 lg:p-5 xl:p-6 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 lg:gap-5">
                {/* Price on Left */}
                <div className="flex-shrink-0">
                  <div className="flex items-baseline">
                    <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white" style={{ textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-base md:text-lg lg:text-xl xl:text-2xl font-light text-white" style={{ textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' }}>
                        {tier.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features on Right */}
                <div className="flex-1 text-white text-left md:text-right space-y-0.5">
                  {tier.features.map((feature, featureIndex) => (
                    <p key={featureIndex} className="text-xs md:text-xs lg:text-sm xl:text-base leading-snug" style={{ textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' }}>
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

