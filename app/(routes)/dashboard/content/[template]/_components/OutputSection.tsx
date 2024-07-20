import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { CopyCheck } from 'lucide-react';


interface props{
  aiResult:any
}
function OutputSection({aiResult}:props) {
  const editorRef:any=useRef()

  useEffect(()=>{
  const editorChange=editorRef.current.getInstance()
  editorChange.setMarkdown(aiResult)
  },[aiResult])
  
  const state={
    value:aiResult,
    copied:false
  }
  return (

 <div>

  <div className='p-5 flex justify-between items-center'>
    <h1 className='text-2xl font-bold'>Your Results</h1>
   
 
      <HoverBorderGradient    className='flex bg-white text-black gap-2 hover:font-bold transition-all duration-1000 ' onClick={()=>{navigator.clipboard.writeText(aiResult)}}><CopyCheck></CopyCheck>copy</HoverBorderGradient>
    
    </div>
    <div>
    
     <Editor
     ref={editorRef}
     
    initialValue="Your Generated Answers will be shown here ⭐."
    initialEditType="wysiwyg"
    height="600px"
    useCommandShortcut={true}
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
    
  />
   </div>
 </div>
  )
}

export default OutputSection