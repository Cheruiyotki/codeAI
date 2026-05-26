import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const features = [
    {
        tittle: "AI Code  Completion",
        description: " Boost your coding speed with intelligent AI code completion that suggests context-aware code snippets, helping you write code faster and with fewer errors.",
         CodeExample: `# On Linux/macOS
export GEMINI_API_KEY="your-actual-api-key-here"

# On Windows (Command Prompt)
set GEMINI_API_KEY="your-actual-api-key-here"

# On Windows (PowerShell)
$env:GEMINI_API_KEY="your-actual-api-key-here"`,
        imagePosition: "left"
    },
    {
        tittle: "Automated Testing",
        description: "Ensure your code is bug-free with AI-powered automated testing that generates test cases and identifies potential issues before they become problems.",
        CodeExample: `// math.test.js
import { expect, test } from 'vitest';
import { add } from './math';

test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});`,
        imagePosition: "right"
    },
    {
        tittle: " Smart Debugging",
        description: " Quickly identify and fix bugs with AI-assisted debugging that analyzes your code and provides insights into potential issues and solutions.",
        CodeExample: `// You have to guess where it broke, or add 10 console.logs to find out
async function getUserDashboardNaive(userId) {
 
  const data = await response.json(); // Throws if server returns HTML error page
  
  // High risk of "Cannot read properties of undefined (reading 'map')"
  const premiumSpecs = data.profile.settings.roles.map(role => role.toUpperCase()); 
  
  return { name: data.name, specs: premiumSpecs };
};`,
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
                  <div key={key} className={`flex flex-col  lg:flex-grow items-center gap-8 sm:gap-12 ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""} `}>
                    {/*Code section*/}
                   <div className="flex-1 w-full" >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl transition-all duration-500"/>
                        <div className="relative bg-gray-900/50 background-drop-blur-sm border border-gray-700/50 ronded-xl sm:rounded-2xl p-4 sm:p-4 overflow-hiddden group-hover:border-1 group-hover:border-blue-600/50 transition-all duration-300">
                            {/* IDE Interface */}
                            <div className="bg-gray-950 rounded-lg p-3 sm:-4 font-mono text-xl sm:text-sm">
                                <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-5 ">
                                    <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                                    <span className="ml-2 sm:ml-4 sm:text-sm text-gray-400"> {feature.tittle}</span>
                                </div>
                                <div>
                                    <SyntaxHighlighter
                  language="javascript" 
                  style={nightOwl} 
                  customStyle={{
                    margin: 0,
                    background: "transparent",
                    borderRadius: '8px',
                    fontSize: '0.7rem',
                    lineHeight: '1.5',
                    height: '100%',
                    }}
                    wrapLines={true}>
                  
                    {feature.CodeExample}
                  </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* Text section */}
                    <div className="flex-1 w-full">
                        <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                           <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">{feature.tittle}</h3>
                           <p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed">{feature.description}</p>
                        </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </section>;
}