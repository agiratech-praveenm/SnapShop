import React, { useEffect,useState } from 'react';
import {Card, CardContent, CardMedia, Container, Typography, Grid, Button} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axiosInstance from './axiosInstance';
import './homepage.css';



const Homepage=()=>{
    
    const [data,setData] = useState([]);

    
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axiosInstance.get('/products'); // Use the Axios instance for making API calls
              console.log("RES:", response.data);
              setData(response.data);
      
            } catch (err) {
              console.log("Error fetching dashboard data: ", err);
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
                            <Card className="card">
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
                                    <Typography style={{fontWeight:"bold"}}>
                                        {product.price} &#8377;
                                    </Typography>
                                    <Typography style={{ fontStyle: "italic", fontSize: "13px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <Button style={{backgroundColor:"#ff8c00", width:"100px", marginLeft:"35%", color:"white"}}>Add to <AddShoppingCartIcon/></Button>
                            </Card> 
                       </Grid>
                    ))
                }

            </Grid>
          </Container>
        );
}

export default Homepage;