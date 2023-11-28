import { Divider } from '@mui/material';
import React from 'react';
const Dashboard = () => {
  const dashboardStyles = {
    marginTop: '100px',
    marginLeft: '100px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '20px',
    backgroundImage: "url('')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '610px', 
    width: '90%', 
  };

  return (
    <>
    
    <div style={dashboardStyles}>
      <div >
      {/* Welcome !!!, where learning meets inspiration. Explore our diverse academic programs, vibrant campus life, and cutting-edge research 
      opportunities. Join a community dedicated to excellence, innovation, and personal growth. Discover your potential with us. Embrace a transformative educational journey that shapes your future. Welcome to [College Name]." */}
      <img src='https://img.freepik.com/premium-photo/online-education-concept-e-learning-learn-internet-home_27634-756.jpg?size=626&ext=jpg&ga=GA1.1.401359678.1700228627&semt=ais' height={'530px'} width={'800px'} style={{borderRadius:'10px',border:'1px solid white',boxShadow:'1px 1px  5px 1px grey,-1px -1px  5px 1px lightblue'}} alt='Image'/>
      </div>
     <marquee direction='up'>
      <div style={{marginLeft:'150px',width:'250px',height:'100%vh'}}>

                            <div className='inside' style={{border:'1px solid black',borderRadius:'10px',padding:'20px'}}>
                                 <div class="eventz"><a href="images/it_project_expo_2023.jpeg" target="_blank"><b>IT PROJECT EXPO 2023</b></a></div>
                                <div class="news-mt">Engineer's Day - Project Expo</div>
                                <div class="news-yr">15 September 2023</div>
                                <div class="eventz"> <a href="images/it_project_expo_2023.jpeg" target="_blank">Brochure</a></div>
                                 <div class="eventz">IT</div>
                              </div>
                              <div className='inside' style={{border:'1px solid black',borderRadius:'10px',padding:'20px'}}>
                                 <div class="eventz"><a href="pdf/CIVIL_ATAL_FDP.pdf" target="_blank"><b>AICTE - ATAL sponsored FDP on  Innovative Construction Materials and Techniques for Sustainable Development </b></a></div>
                                 <div class="news-mt">ICMTSD-2023</div>
                                <div class="news-yr">11 December 2023</div>
                                <div class="eventz"> <a href="pdf/CIVIL_ATAL_FDP.pdf" target="_blank">Brochure</a></div>
                                 <div class="eventz">CIVIL</div>
                              </div>
                              <div className='inside' style={{border:'1px solid black',borderRadius:'10px',padding:'20px'}}>
                                 <div class="eventz"><a href="https://forms.gle/UibXUu6iv8JPsDe89" target="blank"><b>Ideathon 2023</b></a></div>
                                 <div class="news-mt">Inter college Idea pitching contest</div>
                                <div class="news-yr">15 September 2023</div>
                                <div class="eventz"> <a href="images/CSBS_Ideathon23.jpg" target="_blank">Brochure</a></div>
                                 <div class="eventz">CSBS</div>
                              </div>
      </div>
     </marquee>
        </div>
        <>
          <p style={{ width:'100%',background:'lightgrey',marginTop:'5px',textAlign:'center'}}>
            <p>More Information</p>
            <Divider/>
            Copyright © 2012 - 2023 TermsFeed®. All rights reserved.
        <p style={{marginTop:'10px'}}>  © 2023 [Your Institution Name]. All Rights Reserved. | </p>
         <p> Privacy Policy | </p>
         <p>Terms of Use | </p>
         <p>Contact Us: support@exampleuniversity.com | </p>
         <p>Accessibility | </p>
         <p> Disclaimer</p>

         <p>Connect with us: [Social Media Icons]</p>
        </p>
       
        </>
    </>
  );
};

export default Dashboard;
