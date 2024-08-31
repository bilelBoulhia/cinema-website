'use client'
import {Button} from "@/components/ui/Button";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "@/components/ui/Modal";


import SeatForm from "@/components/forms/seat-form";
import PersonalInfo_form from "@/components/forms/Personal-information";
import MultiPageForm from "@/components/ui/Stepper";




const forms = [
    { label: "Personal Info", form: <PersonalInfo_form /> },
    { label: "Seat Selection", form: <SeatForm /> },
];





const booking = ()=>{

    return(
        <Modal>
            <ModalTrigger asChild>
                <Button className="mt-4 sm:mt-6">Book Now</Button>
            </ModalTrigger>
            <ModalBody>

                <ModalContent>
                    <MultiPageForm steps={forms}/>
                </ModalContent>
            </ModalBody>
        </Modal>

    )
}
export default booking;