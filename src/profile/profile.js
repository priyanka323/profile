import React, {useState, Component} from "react";
import './profile.css';

   

class Profile extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          data: null,
          isLoading: true,
          clubBallData: null,
          clubBallLoading: true,
          personalData: null,
          personalDataLoading: true,
          highSchoolData: null,
          highSchoolLoading: true,
          imageUrl: null,
          isImgLoading: true,
          educationData: {},
         isEduLoading: true,
         academicData: [],
        activitiesData: [],
        isExLoading: true,

        };
      }
      // Fetch image URL from the API
        fetchImageUrl() {
            fetch("IMAGE_API_URL")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ imageUrl: data.url, isImgLoading: false });
            })
            .catch((error) => {
                console.error("Error fetching image URL:", error);
                this.setState({ isImgLoading: false });
            });
        }
      //for personal div data
      // Fetch personal data from the API
        fetchPersonalData() {
            fetch("PERSONAL_DATA_API_URL")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ personalData: data, personalDataLoading: false });
            })
            .catch((error) => {
                console.error("Error fetching personal data:", error);
                this.setState({ personalDataLoading: false });
            });
        }
          // Fetch education data from the API
            fetchEducationData() {
                fetch("API_ENDPOINT")
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ educationData: data, isEduLoading: false });
                })
                .catch((error) => {
                    console.error("Error fetching education data:", error);
                    this.setState({ isEduLoading: false });
                });
            }
            // Fetch academic data from the API
            fetchAcademicData() {
                fetch("ACADEMIC_API_ENDPOINT")
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ academicData: data, isExLoading: false });
                })
                .catch((error) => {
                    console.error("Error fetching academic data:", error);
                    this.setState({ isExLoading: false });
                });
            }

            // Fetch extracurricular activities data from the API
            fetchActivitiesData() {
                fetch("ACTIVITIES_API_ENDPOINT")
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ activitiesData: data, isExLoading: false });
                })
                .catch((error) => {
                    console.error("Error fetching activities data:", error);
                    this.setState({ isExLoading: false });
                });
            }
          // Fetch club ball career and accomplishments data from the API
            fetchClubBallData() {
                fetch("CLUB_BALL_API_URL")
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ clubBallData: data, clubBallLoading: false });
                })
                .catch((error) => {
                    console.error("Error fetching club ball data:", error);
                    this.setState({ clubBallLoading: false });
                });
            }
    
            // Fetch high school accomplishments data from the API
            fetchHighSchoolData() {
                fetch("HIGH_SCHOOL_API_URL")
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ highSchoolData: data, highSchoolLoading: false });
                })
                .catch((error) => {
                    console.error("Error fetching high school data:", error);
                    this.setState({ highSchoolLoading: false });
                });
            }

        componentDidMount() {
            // Fetch main data from the API
            fetch("YOUR_API_URL")
              .then((response) => response.json())
              .then((data) => {
                this.setState({ data: data, isLoading: false });
              })
              .catch((error) => {
                console.error("Error fetching data:", error);
                this.setState({ isLoading: false });
              });
        
            // Fetch personal data
            this.fetchPersonalData();
            this.fetchClubBallData(); // Fetch club ball data,
            this.fetchHighSchoolData(); // Fetch high school data
            this.fetchImageUrl(); // Fetch image URL
            this.fetchEducationData(); // Fetch education data,
            this.fetchAcademicData(); // Fetch academic data
            this.fetchActivitiesData(); // Fetch activities data
          }
        
 
   render(){
    const { data, isLoading, personalData, personalDataLoading,clubBallData, clubBallLoading,highSchoolData, highSchoolLoading,imageUrl, isImgLoading ,educationData, isEduLoading ,academicData, activitiesData, isExLoading  } = this.state;

    // Render loading state if either main data or personal data is still being fetched
    if (isLoading || personalDataLoading || clubBallLoading || highSchoolLoading|| isImgLoading || isEduLoading || isExLoading) {
      return <p>Loading...</p>;
    }
   return(
        <>
         <div  style={{marginLeft:"5rem",marginRight:"5rem",marginTop:"2rem",outline:"dashed",marginBottom:"10rem",borderRadius:"10px"}}>
            <div style={{width:"100%",height:"auto",backgroundColor:"#FCC8D1",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <div>
                    <img src="https://stamfordscholars.com.sg/wp-content/uploads/2016/09/tuition.png?w=300" style={{height:"10rem", margin:"1rem"}}/>
                </div>
                <div>
                    <h1 className='Brook'>Brook McCarroll</h1>
                    <h3 className='Texas'>Texas Glory</h3>
                    <h6 className='ExtraContent'>Class of 2013</h6>
                    <h6 className='ExtraContent'>www.texasglory.com</h6>
                </div>
                <div>
                    <h1 style={{fontSize:"5rem",marginRight:"5rem"}}>#1</h1>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"row",marginTop:"0rem", }}>
            
            <div style={{width:"70%",}}>
                
                  <div style={{outline:"double",outlineColor:"#2D4356",height:"auto",margin:"2rem",borderRadius:"10px",boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"}}>
                      <div style={{display: "flex",flexDirection:"row",margin:'0rem',backgroundColor: "#f2f2f2", padding:"1rem",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                          <div style={{margin:"1rem"}}>
                            <h6 style={{textDecorationLine:"underline"}}>School:</h6>
                            <h6 style={{textDecorationLine:"underline"}}>Coach:</h6>
                            <h6 style={{textDecorationLine:"underline"}}>Email:</h6>
                          </div>
                          <div style={{margin:"1rem"}}>
                            <h6>Forney High school(4A)Forney,Texas</h6>
                            <h6>Eric Montgomery</h6>
                            <h6>eric.montgomery@gmail.com</h6>
                            {data && <h6>{data.school}</h6>}
                            {data && <h6>{data.school}</h6>}
                            {data && <h6>{data.school}</h6>}
                          {/* <h6>{data.school}</h6>
                            <h6>{data.coach}</h6>
                            <h6>{data.email}</h6> */}
                          </div>
                      </div>
                      
                      <div style={{marginLeft:"1rem"}}>
                          <h6 style={{textDecorationLine:"underline",margin:"0"}}>Academic Achievements:</h6>
                          <p style={{margin:"0"}}>AB house Roll</p>
                          <p style={{margin:"0"}}>NUHS</p>
                          <h6 style={{textDecorationLine:"underline",marginBottom:"0rem"}}>Extra-curricular Activities:</h6>
                          <p style={{margin:"0"}}>Softball,Sports,Camping</p>
                      </div>
                  </div>
                  
                <div style={{outline:"double",outlineColor:"#2D4356",height:"auto", margin:"2rem",borderRadius:"10px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    <h6 style={{textDecorationLine:"underline",margin:"1rem",}}>Club Ball Career and Accomplishments</h6>
                    <div style={{margin:"1rem"}}>
                        <p style={{margin:"0"}}>2010 ASA 16U Nationals-33rd</p>
                        <p style={{margin:"0"}}>2009 Ronald McDonald Showcase</p>
                        <p style={{margin:"0"}}>2009 Firework Coillage Showcase-Runner-up</p>
                        <p style={{margin:"0"}}>2009 14U ASA Nationals-finished 17th</p>
                        <p style={{margin:"0"}}>2008 12U USSSA Nationals</p>
                        <p style={{margin:"0"}}>2005 10U AFA Nationals</p>
                        <p style={{margin:"0"}}>2004 8U USSSA STATE CHAMPS</p>
                        {clubBallData &&
                        clubBallData.map((item, index) => (
                        <p key={index}>{item}</p>
                        ))}
                    </div>
                    <h5 style={{textDecorationLine:"underline",margin:"1rem"}}>High School Accomplishments</h5>
                    <div style={{margin:"1rem"}}>
                    {highSchoolData &&
                    highSchoolData.map((item, index) => (
                    <p key={index} style={{ margin: "0" }}>
                        {item}
                    </p>
                    ))}
                        <p style={{margin:"0"}}>Varsity Softball Team for Forney High School Since Freshment Year</p>
                        <p style={{margin:"0"}}>2010 Freshment Year-2nd Team All-District</p>
                        <p style={{margin:"0"}}>2011 Sophomore Year-1st Team All-District</p>
                        <p style={{margin:"0"}}> 2011 District MVP</p>
                        <p style={{margin:"0"}}>2011 All Area Player of the Year</p>
                       
                    </div>
                </div>
                <div style={{outline:"double",outlineColor:"#2D4356",height:"auto",margin:"2rem",borderRadius:"10px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <h5 style={{textDecorationLine:"underline",margin:"1rem"}}>High School Accomplishments</h5>
                    <div style={{margin:"1rem"}}>
                    {highSchoolData &&
                    highSchoolData.map((item, index) => (
                    <p key={index} style={{ margin: "0" }}>
                        {item}
                    </p>
                    ))}
                        <p style={{margin:"0"}}>Varsity Softball Team for Forney High School Since Freshment Year</p>
                        <p style={{margin:"0"}}>2010 Freshment Year-2nd Team All-District</p>
                        <p style={{margin:"0"}}>2011 Sophomore Year-1st Team All-District</p>
                        <p style={{margin:"0"}}> 2011 District MVP</p>
                        <p style={{margin:"0"}}>2011 All Area Player of the Year</p>
                       
                    </div>
                </div>
            </div>
            <div style={{width:"30%",}}>
                <div style={{display:"flex",margin:'2rem', height:'auto',outline:"double",outlineColor:"#2D4356",borderRadius:"10px",alignItems:"center",justifyContent:"center",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    {/* <int type="file" onChange={handleFileChange} />
                    <button onClick={handleUpload}>Upload Photo</button> */}
                    <img src="https://media.istockphoto.com/photos/passport-picture-of-a-smiling-turkish-businesswoman-picture-id856599656?k=6&m=856599656&s=612x612&w=0&h=4Nwo_zZorMKSrrHb-c9DoO7JarfeuKQXXV2U6Ky6N9Q=" style={{height:"12rem",}}/>
                    <img src={imageUrl} style={{ height: "12rem", width: "auto" }} alt="" />
                    {/* <input type="file" onChange={handleFileChange} />
                    <button onClick={handleUpload}>Upload Photo</button>
                    <img src="https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172455/2B8_5801.jpg" style={{height:"12rem",width:"auto"}}/> */}
                </div>
                <div style={{height:"auto",outline:"double",outlineColor:"#2D4356",margin:"2rem",borderRadius:"10px" ,boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    <h3 style={{textAlign:"center"}}>Personal</h3>
                    <div style={{display:"flex", flexDirection:"row",height:"auto",margin:"1rem"}}>
                        
                        <div style={{width:'50%'}}>
                            <h6 >DOB:</h6>
                            <h6 >HT:</h6>
                            <h6 >WT:</h6>
                           
                            <h6>POSITION</h6>
                        </div>
                        <div style={{width:'50%'}}>
                        {data && <h6>{personalData.dob}</h6>}
                        {/* <h6>{personalData.dob}</h6>
                        <h6>{personalData.ht}</h6>
                        <h6>{personalData.wt}</h6>
                        <h6>{personalData.position}</h6> */}
                            <h6 >03/08/2000</h6>
                            <h6 >5'7</h6>
                            <h6 >52</h6>
                            
                            <h6 >SS/2nd/C</h6>
                        </div>
                    </div>
                </div>
                <div style={{height:"auto",outline:"double",outlineColor:"#2D4356",margin:"2rem",display:'flex',flexDirection:"row" ,borderRadius:"10px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <div style={{width:'50%',margin:"1rem"}}>
                            <h6>GPA:</h6>
                            <h6>SAT/ACT:</h6>
                            <h6>WT:</h6>
                            <h6>GRAD YEAR:</h6>
                            <h6>POSITION</h6>
                        </div>
                        <div style={{width:'50%',margin:"1rem"}}>
                        <h6>{educationData.gpa}</h6>
                        <h6>{educationData.satAct}</h6>
                        <h6>{educationData.wt}</h6>
                        <h6>{educationData.gradYear}</h6>
                        <h6>{educationData.position}</h6>
                            <h6>3.0</h6>
                            <h6>N/A</h6>
                            <h6>52</h6>
                            <h6>2013</h6>
                            <h6>SS/2nd/C</h6>
                        </div>
                </div>
                {/* <div style={{height:"auto",outline:"solid",outlineColor:"red",margin:"2rem",display:'flex',flexDirection:"row" ,borderRadius:"10px"}}>
                        <div style={{width:'50%',margin:"1rem"}}>
                        <h6>GPA:</h6>
                            <h6>SAT/ACT:</h6>
                            <h6>WT:</h6>
                            <h6>GRAD YEAR:</h6>
                            <h6>POSITION</h6>
                        </div>
                        <div style={{width:'50%',margin:"1rem"}}>
                        <h6>{educationData.gpa}</h6>
                        <h6>{educationData.satAct}</h6>
                        <h6>{educationData.wt}</h6>
                        <h6>{educationData.gradYear}</h6>
                        <h6>{educationData.position}</h6>
                            <h6>03/08/2000</h6>
                            <h6>5'7</h6>
                            <h6>52</h6>
                            
                            
                        </div>
                  </div> */}
                <div style={{height:"auto",outline:"double",outlineColor:"#2D4356",margin:"2rem",borderRadius:"10px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <div style={{marginLeft:"1rem"}}>
                          <h6 style={{textDecorationLine:"underline",margin:"0.2",marginBottom:"0"}}>Academic Achievements:</h6>
                          {academicData.map((achievement, index) => (
                            <p key={index} style={{ margin: "0" }}>
                                {achievement}
                            </p>
                            ))}
                          <p style={{margin:"0"}}>AB house Roll</p>
                          <p style={{margin:"0"}}>NUHS</p>
                          <h6 style={{textDecorationLine:"underline",marginBottom:"0", marginTop:"0.5rem"}}>Extra-curricular Activities:</h6>
                          {activitiesData.map((activity, index) => (
                            <p key={index} style={{ margin: "0" }}>
                                {activity}
                            </p>
                            ))}
                          <p style={{margin:"0"}}>Softball,Sports,Camping</p>
                      </div>
                </div>
            </div>
        </div>
        </div>
            
        </>
    );
}

}
export default Profile;