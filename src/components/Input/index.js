import {Input as InputWrapper, Label as LabelWrapper} from './styled'
import React from "react";
const Input = React.forwardRef(({label, error, ...props}, ref) => {
  return(
    <LabelWrapper >
      <p>{label}</p>
      <InputWrapper ref={ref}{...props}/>
      {error&& <p>{error.message}</p>}
    </LabelWrapper>
  )
})
export default Input