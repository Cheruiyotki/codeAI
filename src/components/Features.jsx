
const features = [
    {
        title: "AI Code  Completion",
        description: " Boost your coding speed with intelligent AI code completion that suggests context-aware code snippets, helping you write code faster and with fewer errors.",
        image: "code-completion",
        imagePosition: "left"
    },
    {
        tittle: "Automated Testing",
        description: "Ensure your code is bug-free with AI-powered automated testing that generates test cases and identifies potential issues before they become problems.",
        image: "automated-testing",
        imagePosition: "right"
    },
    {
        tittle: " Smart Debugging",
        description: " Quickly identify and fix bugs with AI-assisted debugging that analyzes your code and provides insights into potential issues and solutions.",
        image: "smart-debugging",
        imagePosition: "left"
    }
];




export default function  Features() {
    return  <section id="features" className="py-16 sm:py-20 px-10 sm:px-8 relative">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:sm-20">
                <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent ">Your Complete AI-Powered Development Toolkit</span>
                    <br />
                    <span className="bg-gradient-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent ">Workflow Automation</span>
                </h2>
            </div>

            <div className="space-y-16 sm:space-y-20 lg:space-y-32">
                {features.map((feature,  key) => (
                  <div key={key} className="">
                    {/*Code section*/}
                 =   <div>
                        <div>
                            
                        </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </section>;
}