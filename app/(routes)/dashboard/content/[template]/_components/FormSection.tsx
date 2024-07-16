import React from 'react'
import { TEMPLATE } from '../../../_components/Templatespace'
interface SELECTTEMPLATE{
    selectedTemplate?:TEMPLATE
}
function FormSection({selectedTemplate}:SELECTTEMPLATE) {
  return (
    <div>{selectedTemplate?.name}</div>
  )
}

export default FormSection