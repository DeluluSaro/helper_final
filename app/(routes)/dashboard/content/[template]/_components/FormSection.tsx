import React from "react";
import { FORM, TEMPLATE } from "../../../_components/Templatespace";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
interface SELECTTEMPLATE {
  selectedTemplate?: TEMPLATE;
}
function FormSection({ selectedTemplate }: SELECTTEMPLATE | any) {
  return (
    <div className="shadow-md">
      <div className="p-5  flex flex-col justify-center items-center">
        <Image
          src={selectedTemplate?.icon}
          alt="img"
          width={50}
          height={50}
        ></Image>

        <h1 className="font-bold text-[#7fff00]"> {selectedTemplate?.name}</h1>
      </div>
      <form className="p-5" action="">
        {selectedTemplate?.form?.map((item:FORM,index:number)=>(

         <div>
           <div className="flex flex-col gap-5">
            <h1 className="text-xs font-bold">{item?.label}</h1>
            {item?.field=='input'?<Input className="mb-5"></Input>:item?.field=='textarea'?<Textarea className="mt-5"></Textarea>:null}

            
          </div>
         
         </div>
         

         





        ))
        }
     <Button className="flex-1 flex mt-5 bg-[#7fff00] justify-end">Generate content</Button>
      </form>
    </div>
  );
}

export default FormSection;
