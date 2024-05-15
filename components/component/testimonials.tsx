export default function Testimonials(){

    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Martin escobar",
            title: "Roofing Customer            ",
            quote: "Great guys to work with and real quality work. You will not be disappointed"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Angela stian",
            title: "Commercial Solar Customer            ",
            quote: "Extremely smooth process and straightforward. When you make any kind of big purchase you want to be backed by an excellent company. Elek was extremely knowledgeable and professional."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Karim ahmed",
            title: "Residential Solar Customer            ",
            quote: "10/10 recommend these guys for all your solar panel needs. Easy to talk to, explained the whole process thoroughly and answered all my questions. So glad I used their services!."
        },
    ]

    return (
        <section className="py-20 bg-slate-50 ">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl sm:text-center md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        See what others saying about us
                    </h3>
                    <p className="mt-3 text-gray-600">
                    From the very beginning, the team at Coastline Solar exhibited an unparalleled level of expertise and commitment to customer satisfaction. They took the time to thoroughly assess my energy needs and provided a comprehensive plan that exceeded my expectations in terms of efficiency and cost-effectiveness.                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-16 h-16 rounded-full" />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}