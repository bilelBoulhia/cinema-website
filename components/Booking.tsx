'use client'
import {Button} from "@/components/ui/Button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader, DialogTitle,
    DialogTrigger
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
        <Dialog >
            <DialogTrigger asChild>
                <Button className="mt-4 sm:mt-6">Book Now</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] w-[90vw] shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] rounded max-w-[300px] sm:w-full">
               <DialogTitle>buy a ticket</DialogTitle>
                <DialogHeader>
                    <DialogDescription>
                     <MultiPageForm steps={forms}/>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}
export default booking;