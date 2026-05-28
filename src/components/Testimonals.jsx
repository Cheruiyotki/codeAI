

const testimonials = [

    {
        name: "John Doe",
        title: "CEO of Tech Innovators",
        image: " https://images.pexels.com/photos/37741524/pexels-photo-37741524.jpeg",
        content: "AI Dev Hub has transformed our development process. The tools and resources available have significantly accelerated our AI projects, allowing us to innovate faster than ever before."
    },
    {
        name: "Jane Smith",
        title: "Lead AI Engineer at FutureTech",
        image: "https://images.pexels.com/photos/37748015/pexels-photo-37748015.jpeg",
        content: "The AI Dev Hub has been instrumental in our team's success. The comprehensive suite of tools and the exceptional support have enabled us to deliver cutting-edge AI solutions efficiently."
    },
    {
        name: "Emily Johnson",
        title: "Data Scientist at DataWorks",
        image: "https://images.pexels.com/photos/3886347/pexels-photo-3886347.jpeg",
        content: "I can't recommend AI Dev Hub enough. The platform's user-friendly interface and powerful features have made it an essential part of our AI development workflow."
    }
]





export default function  Testimonals() {
    return  <section 
    id="testimonials" 
    className="py-16 sm:py-20 px-10 sm:px-8 relative">

        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
            {/*  left Side * */}
            <div className= "lg:w-1/2 w-full text-center lg:text-left">
                <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    What Developers Are Saying about Us.
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl sm:text-lg mx-auto">
                    Hear from our satisfied users who have experienced the transformative power of AI Dev Hub in their development journey.
                </p>
            </div>
            {/*  right Side * */}
            <div className="lg:w-1/2 w-full">
                <div>
                    {testimonials.map((testimonial,  key) => (
                        <div
                         key={key}
                        className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl" >
                            <div className="flex items-start space-x-3 sm:space-x-4">
                              <div className="flex-shrink-0">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                             ""
                                </div>
                              </div>
                              <div className="flex-grow">
                                <p>{testimonial.content}</p>
                                <div>
                                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"/>
                                </div>
                              </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            </div>
            </section>
}