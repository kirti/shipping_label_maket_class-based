import React from "react";
import { getShippingCost, getShippingOption} from "../../../utils/shippingLabelMarker";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";


export function TaskConfirm ({ wizardContext }){
   
    const {from, to , weight , shippingOption} = wizardContext

 return (
     <>
        <ListSubheader color="primary">Sender Information</ListSubheader>
        <Typography component="div">
            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Name: {from.name} </Box>
        </Typography>
        <Typography component="div">
            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Street: {from.street} </Box>
        </Typography>
        <Typography component="div">
            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>City: {from.city} </Box>
        </Typography>
        <Typography component="div">
            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>State: {from.state} </Box>
        </Typography>
        <Typography component="div">
            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Zip Code: {from.zip} </Box>
        </Typography>
        <ListSubheader color="primary">Receiver Information</ListSubheader>
        <Typography component="div">
            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Name: {to.name} </Box>
        </Typography>
        <Typography component="div">
            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Street: {to.street} </Box>
        </Typography>
        <Typography component="div">
            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>City: {to.city} </Box>
        </Typography>
        <Typography component="div">
            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>State: {to.state} </Box>
        </Typography>
        <Typography component="div">
            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Zip Code: {to.zip} </Box>
        </Typography>
        <Typography component="div">
            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Weight: {weight.weight} lbs</Box>
        </Typography>
        <Typography component="div">
            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Shipping Option: {getShippingOption(shippingOption.shippingOption)} </Box>
        </Typography>
        <Typography component="div">
            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Shipping Cost: ${getShippingCost(weight.weight, shippingOption.shippingOption)} </Box>
        </Typography>
     </>
    );
};