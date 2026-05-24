import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const features = [
    {
        tittle: "AI Code  Completion",
        description: " Boost your coding speed with intelligent AI code completion that suggests context-aware code snippets, helping you write code faster and with fewer errors.",
         CodeExample: `const results = await CodeFlow.search(searchQuery)
         <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>;`,
        imagePosition: "left"
    },
    {
        tittle: "Automated Testing",
        description: "Ensure your code is bug-free with AI-powered automated testing that generates test cases and identifies potential issues before they become problems.",
        CodeExample: `const results = await CodeFlow.search(searchQuery)
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>;`,
        imagePosition: "right"
    },
    {
        tittle: " Smart Debugging",
        description: " Quickly identify and fix bugs with AI-assisted debugging that analyzes your code and provides insights into potential issues and solutions.",
        CodeExample: `const results = await CodeFlow.search(searchQuery)
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>;`,
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
                            {/* IDE Interface */}
                            <div>
                                <div>
                                    <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                                    <span className="ml-2 sm:ml-4 sm:text-sm text-gray-500"> {feature.tittle}</span>
                                </div>
                                <div>
                                    <SyntaxHighlighter
                  language="javascript" 
                  style={nightOwl} 
                  customStyle={{
                    margin: 0,
                    borderRadius: '8px',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    height: '100%',
                    border:"1px solid #3c3c3c"}}>
                    {feature.CodeExample}
                  </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </section>;
}