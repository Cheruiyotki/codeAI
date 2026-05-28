import { Check, Star } from "lucide-react";

const plans = [
    {
        name: "Basic",
        price: "$9.99",
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
        price: "$79.99",
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
        price: " 199.99",
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
                    <div key={key} className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl  p-6 sm:p-8 transition-all duration-300 overflow-visible flex-col h-full 
                    ${plan.mostPopular 
                    ? " border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105" 
                    : "border-slate-800 hover:border-slate-600"}`}>
                 
                 <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none" /> 
                        {plan.mostPopular && ( 
                            <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                                <div className="flex items-center space-x-1 px-3 sn:px-4 py-1 sm:py-1.5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                                    <Star className="w-3 h-3 sm:w-3 sm:h-3 fill-current"/>
                                    <span>Most Popular</span>
                                </div>
                            </div>
                        )}

                        <div className="text-center mb-6 sm:mb-8">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{plan.description}</p>
                            <div className="flex items-baseline justify-center">
                                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent ">{plan.price}</span>
                                <span className="text-gray-400 ml-1 sm:ml-2 text-sm sm:text-base">/month</span>
                            </div>
                        </div>
                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
                            {plan.features.map((feature,  featureKey)   => (
                                <li key={featureKey} className="flex items-start space-x-2  sm:space-x-3 mb-2 text-gray-300" >
                                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                                    
                                    </div>
                                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className= {`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300  mt-auto hover:scale-102  cursor-pointer text-sm sm:text-base ${
                            plan.mostPopular 
                            ? "bg-gradient-to-b from-blue-500 to-cyan-500"
                            : "bg-white/5 border border-white/10 hover:bg-white10"}`}>
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
              <div className="mt-8 sm:mt-12 text-center">
                <p className="text-gray-400 text-base text-xl ">Need a custom plan? <a href="#" className="text-blue-400 hover:text-blue-300">Contact our sales team</a></p>
              </div>
            </div>
         </section>;
}