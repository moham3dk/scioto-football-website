import React from "react";

const Page = () => {
  const coachingStaff = [
    {
      name: "Alex Place",
      role: "Head Football Coach",
      bio: "Alex Place is entering his 2nd season as Head Coach and 14th season with the Dublin Scioto Football program. He is a 2007 graduate of Archbishop Alter High School and holds degrees from The Ohio State University. He resides in Dublin with his wife Ashley and sons Jaxon and Mason.",
    },
    {
      name: "Cory Drake",
      role: "Defensive Assistant, Freshman Defensive Coordinator",
      bio: "Cory Drake is in his second year coaching high school football. He works at The Ohio State University Medical Center as an EMT and lives in Grandview Heights with his dog Bailey.",
    },
    {
      name: "Gabe Hover",
      role: "Defensive Backs",
      bio: "Coach Hoover is returning to the sideline for his 22nd season of coaching, 17th with the Irish. Coach Hoover attended The Ohio State University and began coaching in 1997 at Buckeye Valley (his Alma Mater). He has been an Educator in Dublin since the fall of 1999 at various buildings and roles. Coach Hoover is currently teaching Health and Physical Education at Scioto. His wife, Georgia, is also a Scioto educator and guidance counselor. Coach Hoover’s two daughters (Alexis and Morgan) are Scioto grads and are attending Kent State University.",
    },
    {
      name: "Arby Jones",
      role: "Strength Coordinator and Assistant O-Line Coach",
      bio: "Coach Jones is entering his 13th year with the Irish, working with all Irish athletes, running the strength and conditioning program and helping coach O-line. Coach Jones graduated from Wake Forest University in 2006, where he was a three year starter on the offensive line and was a part of the Demon Deacons ACC Championship and Orange Bowl teams. Coach Jones teaches Basic Strength Training, Advanced Strength training, & Health at Scioto and lives in Dublin with his wife Kim and two sons, Liam & Sullivan, both future Irish students.",
    },
    {
      name: "Aleck Kelley",
      role: "Offensive Assistant and Freshman Head Coach",
      bio: "Coach Kelly is entering his 2nd season as Freshmen Head Coach and 8th season with the program. Coach Kelly is a 2017 graduate from Dublin Scioto. Coach Kelly received his bachelor's degree in Special Education at Ohio Dominican University. Coach Kelly is going into his third year of teaching at Davis Middle School as an Intervention Specialist. Coach Kelly resides in Hilliard with his wife Nicole and dog Lucy.",
    },
    {
      name: "Blake Moeller",
      role: "Offensive Line and JV Head Coach",
      bio: "Blake is starting his 10th year around the Scioto football program. Blake Graduated from Dublin Scioto in 2015. Blake graduated from Bowling Green State University in 2021 with a degree in Special Education. Blake is starting his second year as an Intervention Specialist at Dublin Scioto and is excited and grateful for his opportunity to continue to work with students at Dublin Scioto.",
    },
    {
      name: "Dave Nosker",
      role: "Defensive Assistant",
      bio: "Coach Nosker will begin his 28th season with the Irish and 43rd season coaching football in Dublin. Dave is a graduate of The Ohio State University and received his Masters Degree in Education Administration from Ashland University. His wife George Ann retired from the Dublin City Schools in August after 33 years of service. Dave and George Ann reside in Dublin and have two children and 6 grandchildren. His son Michael has a daughter Mackenzie who will be a freshman at Ohio State University, a step son,Pierson and a baby on the way this fall, daughter Nichole and her husband Andy have three children, Carson, Madison, and Jackson.",
    },
    {
      name: "Jason Reineck",
      role: "Corners",
      bio: "Jason Reineck is a 2009 grad of Dublin Scioto and a 2014 grad in middle childhood education from The Ohio State University. Coach Reineck was a three sport varsity athlete: football, basketball, track and field at Dublin Scioto. He was a member of the Ohio State track team and later became a valued member of the Buckeye Pistol team where he was a three time all-American and captain of their National Championship team in 2014. Coach Reineck works for Feazel Roofing and is also the proud owner of Same Shoes LLC, a business of shoe restoration/customization. He lives in Dublin with his wife Meghan and their two Mini-Australian Shepherds, Bodhi and Ruby.",
    },
    {
      name: "Jason Rice",
      role: "Offensive Coordinator and Quarterbacks",
      bio: "Jason Rice is in his 13th season with the Irish. Coach Rice is a 2006 graduate of Dublin Scioto High School where he was a 3 year starter and key member of the 2003, 2004, and 2005 playoff teams. Coach Rice is a 2012 graduate of Bowling Green State University where he played football and majored in education. He is currently teaching social studies at Dublin Jerome and resides in Powell with his wife Lauryn and their three children: Declan, Harper, and Jack.",
    },
    {
      name: "Drew Spencer",
      role: "Offensive Skill",
      bio: "Coach Spencer is in his 3rd season with the Irish. He is a Tiffin University graduate where he was a 4-year starter on the football team, all conference performer and Blackwatch Leadership Council member. Previously, Drew coached 10 seasons on both the collegiate and high school levels with stops at Capital University, Carnegie Mellon University, Ohio Dominican University and his alma mater Bellaire High School. Coach Spencer and his wife, Reanna, reside in Dublin with their two children Maverick and Landry.",
    },
    {
      name: "Drew Stagg",
      role: "Offensive Skill Coordinator",
      bio: "Coach Stagg is a graduate of Walsh University where he played both defensive and offensive line. This is his 16th year with the Irish and his tenth year as the receivers coach for Scioto. Previously, Drew was the Irish Head Freshman Coach. Coach Stagg teaches 8th grade History at Davis Middle School. Coach Stagg has a bachelor’s degree in Education with a focus on integrated social studies. He also has his masters degree in curriculum and instruction, and a masters degree in educational leadership from Miami University. Coach Stagg resides in Powell with his wife Krista and their two sons Kaden and Koda Stagg.",
    },
    {
      name: "Doug Tima",
      role: "TE Coach",
      bio: "Coach Doug Tima is in his 16th year with the Irish. Coach Tima graduated from Bucyrus High School in 2003. He received a BS in Physical Science and AYA Education from Otterbein University in 2007, where he was a four-year letterman, first team all OAC player, and a captain on the football team. In 2015 he received his Masters Degree in Educational Leadership from the University of Dayton. Coach Tima teaches Physics and Physical Science at Dublin Scioto High School. Coach Tima resides in Westerville with his wife Jessica.",
    },
    {
      name: "Jon Torski",
      role: "Linebackers and Defensive Coordinator",
      bio: "Coach Torski is beginning his 17th year coaching. Coach Torski is a 2007 Dublin Scioto graduate where he played football and baseball. Coach Torski went on to earn a bachelor’s degree from The Ohio State University in finance before returning to school to earn his teaching certification from Capital University in 2018. Coach Torski teaches mathematics at Thomas Worthington High School. Coach Torski and his wife Megan reside in Columbus along with their daughter Maeve.",
    },
    {
      name: "John Witt",
      role: "Defensive Line",
      bio: "Coach Witt is beginning year 21 at Scioto. He & his wife Kortney reside in Westerville with their four children Hannah, Zachary, Emma, & Gracie.",
    },
  ];

  return (
    <div className="min-h-screen bg-white w-full flex justify-center items-center p-4">
      <div className="w-full max-w-6xl my-4 md:my-8">
        <h1 className="text-4xl font-oswald text-[#014321] text-center mb-8">
          2025 COACHING STAFF
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-[#014321]">
            <thead>
              <tr className="bg-[#014321] text-white">
                <th className="py-3 px-4 border-b text-left">Name</th>
                <th className="py-3 px-4 border-b text-left">Role</th>
                <th className="py-3 px-4 border-b text-left">Bio</th>
              </tr>
            </thead>
            <tbody>
              {coachingStaff.map((coach, index) => (
                <tr key={index} className="hover:bg-gray-300 transition-colors">
                  <td className="py-2 px-4 border-b text-[#014321]">
                    {coach.name} {/* Name */}
                  </td>
                  <td className="py-2 px-4 border-b text-[#014321]">
                    {coach.role} {/* Role */}
                  </td>
                  <td className="py-2 px-4 border-b text-[#014321]">
                    {coach.bio} {/* Bio */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
