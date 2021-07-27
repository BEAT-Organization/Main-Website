import {TargetsContainer} from './styles'

export {default as Vision} from './vision'
export {default as Mission} from './mission'

export function AboutTargets({children, ...restProps}){
   return(
      <TargetsContainer {...restProps}>{children}</TargetsContainer>
   )
}
