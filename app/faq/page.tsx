import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQAccordion() {
    return (
        <div className="p-20">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        Who can use this app?
                    </AccordionTrigger>
                    <AccordionContent>
                        This app is for practicing Muslims seeking a spouse based on Islamic values and traditions.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        How do I sign up for the app?
                    </AccordionTrigger>
                    <AccordionContent>
                        The signup process is quick and easy! You'll be asked to create profile with basic information and preferences.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        What safety measures are in place?
                    </AccordionTrigger>
                    <AccordionContent>
                        We take user safety very seriously. We have features to report inappropriate behavior and a team dedicated to maintaining a safe and respectful environment.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        Can I keep my profile private
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, you have control over your privacy settings. You can choose who can see your profile and contact you.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>
                        How does the matching process work?
                    </AccordionTrigger>
                    <AccordionContent>
                        Our matching system considers your preferences and compatibility factors based on Islamic values. You'll receive matches based on your criteria.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>
                        How can I communicate with potential matches?
                    </AccordionTrigger>
                    <AccordionContent>
                        We offer safe and secure communication features within the app. You can express interest, send messages, and chat with potential matches following Islamic guidelines.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>
                        Does the app help with the Nikah (marriage ceremony)?
                    </AccordionTrigger>
                    <AccordionContent>
                        While the app facilitates finding a potential spouse, the Nikah process itself should be conducted following Islamic guidelines and with the involvement of a religious scholar (Imam).
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
