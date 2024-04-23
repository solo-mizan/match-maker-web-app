import { Button } from "./button"

const Hero = () => {
    return (
        <div className="flex justify-center items-center p-10 bg-blue-50 grainy-light">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="./couple-1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">The biggest and most trusted
                            matrimony service for Bengalis!</h1>
                        <p className="py-6">Now find matches based on your hobbies & interests</p>
                        <Button>Get started</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero