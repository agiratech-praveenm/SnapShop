import React, { useEffect,useState } from 'react';
import {Card, CardContent, CardMedia, Container, Typography, Grid} from '@mui/material';
import axios from 'axios';



const Homepage=()=>{
    
    const [data,setData] = useState([]);

    
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const url = 'https://63bbf047fa38d30d85b54374.mockapi.io/products';
                const response = await axios.get(url);
                console.log("RES:", response.data);
                setData(response.data);
                
            }catch(err){
                console.log("eRRor fetching dashboard data: ", err);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData,5000);

        return ()=>{
            clearInterval(intervalId);
        };
    },[]);

    useEffect(() => {
        console.log("data:", data);
    }, [data]); 

    return(
          <Container style={{padding:"10px", marginTop: "80px"}}>
            <Grid container spacing={2}>
                {
                    data.map((product)=>(
                       <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.imgUrl}
                                    alt={product.productName}
                                />
                                <CardContent>
                                    <Typography style={{fontWeight:"bold"}}>
                                        {product.productName}
                                    </Typography>
                                    <Typography style={{fontStyle:"italic", fontSize:"13px"}}>
                                        {product.description}
                                    </Typography>
                                </CardContent>
                            </Card> 
                       </Grid>
                    ))
                }

            </Grid>
          </Container>
        );
}

export default Homepage;