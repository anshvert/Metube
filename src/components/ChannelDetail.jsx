import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Box} from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {

     const { id } = useParams();
     const [channelDetail,setChannelDetail] = useState(null);
     const [videos,setVideos] = useState([]);

     console.log(channelDetail,videos);

     useEffect(() => {

          fetchFromAPI(`channels?part=snippet&id=${id}`)
              .then((data) => setChannelDetail(data?.items[0]));

          fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
              .then((data) => setVideos(data?.items));

     },[id])

     return (

         <Box minHeight="95vh">

              <Box>
                   <div style={{
                       background: 'linear-gradient(90deg,' +
                           'rgba(72,65,185,1) 9%,' +
                           'rgba(165,208,208,1) 28%,' +
                           'rgba(115,135,175,1) 43%,' +
                           'rgba(123,148,173,1) 51%,' +
                           'rgba(129,158,172,1) 57%,' +
                           'rgba(136,169,170,1) 64%,' +
                           'rgba(153,192,193,1) 72%,' +
                           'rgba(170,215,215,1) 81%,' +
                           'rgba(126,150,182,1) 96%,' +
                           'rgba(115,141,142,1) 100%, rgba(39,39,41,1) 100%)',
                       zIndex: 10,
                       height: '300px'
                   }}/>

                  <ChannelCard channelDetail={channelDetail} marginTop="-93px"/>
              </Box>

             <Box display="flex" p="2">

                 <Box sx={{ mr: { sm: '100px'}}}/>

                     <Videos videos={videos}/>

             </Box>

         </Box>

     )

}

export default ChannelDetail;