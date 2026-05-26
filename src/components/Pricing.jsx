
const plans = [
    {
        name: "Basic",
        price: "$9.99/month",
        description: "Ideal for individuals and small teams starting their AI development journey.",
        features: [
            "Up to 5 projects",
            "10Gb of storage",
            "Basic AI model access",
            "Community support",
            "Limited API access",
            "Mobile app access"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: "$79.99/month",
        description: "Perfect for growing teams and professionals who need more power and flexibility.",
        features: [
            "Up to 20 projects",
            "100Gb of storage",
            "Advanced AI model access",
            "Advanced analytics",
            "Priority support",
            "Unlimited API access",
            "Mobile app access"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: " 199.99/month",
        description: "Tailored solutions for large organizations with custom needs and dedicated support.",
        features: [
            "Custom AI model access",
            "Custom storage options",
            "Dedicated support",
            "Unlimited API access",
            "24/7 support",
            "Mobile app access"
        ],
        mostPopular: false
    }
]



export default function  Pricing() {
    return  <section id="pricing" className="py-16 sm:py-20 px-10 sm:px-8 relative">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:sm-20">
                <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent "> Simple, Transparent  </span>
                    <br />
                    <span className="bg-gradient-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent ">Pricing Plans</span>
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl sm:text-lg mx-auto">
                    Choose the perfect plan for your needs. All plans include a 14-day free trial.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ">
                {plans.map((plan, key) => ( 
                    <div key={key} className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl  p-6 sm:p-8 transition-all duration-300 overflow-visible flex-col h-full ${plan.mostPopular ? " border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105" : "border-slate-800 hover:border-blue-500"}`}></div>
                ))}
            </div>

            </div>
         </section>;
}