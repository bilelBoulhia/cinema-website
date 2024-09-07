const PersonalInfo_form = ()=>{
    return (
        <form>
            <div className="  space-y-12">


                <div className="border-b border-gray-900/10 text-left iphone5:pb-0  pb-12">
                    <h2 className="iphone5:text-base   font-semibold leading-7 ">Personal Information</h2>
                    <p className="mt-1  text-sm leading-6 ">This name will apear on the ticket make sure its correct </p>

                    <div
                        className="mt-10 iphone5:mt-4  grid grid-cols-1 gap-x-6 gap-y-8 iphone5:gap-y-2 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 ">
                                First name
                            </label>
                            <div className="mt-2 ">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 ">
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="time" className="block text-sm font-medium leading-6">
                                Time
                            </label>
                            <div>
                                <select
                                    id="time"
                                    name="time"

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>06/09/2024 11:00</option>
                                    <option>08/09/2024 17:00</option>
                                    <option>09/09/2024 20:00</option>
                                </select>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </form>
    )
}

export default PersonalInfo_form






