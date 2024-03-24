import {
    CardMeta,
    CardHeader,
    CardGroup,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
    Button,
    ButtonGroup
} from 'semantic-ui-react'

export default function Checkout({total}){
    return (
        
                    <div className='ui two buttons' style={{marginTop: "48px"}}>
                        <Button  color='green' >
                            Checkout
                        </Button>
                        <Button  color='green' >
                            ${total.toFixed(2)}
                        </Button>
                    </div>
                
    )
}





