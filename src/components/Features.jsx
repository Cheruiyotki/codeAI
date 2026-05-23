
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
        <div>
            <div className="text-center mb-12 sm:mb-16 lg:sm-20">
                <h2>
                    <span>Your Complete AI-Powered Development Toolkit</span>
                    <br />
                    <span>Workflow Automation</span>
                </h2>
            </div>
        </div>
    </section>;
}