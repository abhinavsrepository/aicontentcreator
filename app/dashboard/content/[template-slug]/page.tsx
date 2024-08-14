import React from 'react'
import FormSection from './_components/FormSection'
import OutputSection from './_components/OutputSection'
import {TEMPLATE} from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
interface PROPS{
    params:{
        'template-slug':string
    }
}

function CreateNewContent (props:PROPS) {
   const selectedTemplate:TEMPLATE = Templates?.find((item)=>item.slug==props.params['template-slug'])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5 '>
      {/* FormSection */}
      <FormSection selectedTemplate={selectedTemplate}/>
    {/* outsection */}
    <OutputSection/>
    </div>
  )
}

export default CreateNewContent