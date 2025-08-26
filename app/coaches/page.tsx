import React from "react";
import PageTitle from "@/components/common/PageTitle";

const Page = () => {
  const coachingStaff = [
    {
      name: "Alex Place",
      role: "Head Football Coach",
      bio: "Alex Place is entering his 3rd season as Head Coach and 15th season with the Dublin Scioto Football program. Coach Place was the former defensive coordinator before taking over as Head Coach for the program. Coach Place is a 2007 graduate of Archbishop Alter High School. Coach Place received his bachelor's degree in Sports Management and his Master’s degree in Education from The Ohio State University. Coach Place is currently the APEX and Math teacher at Scioto. Coach Place has also spent time as an assistant baseball coach at Scioto and head 8th grade coach at Davis Middle School. Coach Place resides in Dublin with his wife Ashley and sons Jaxon and Mason.",
    },
    {
      name: "Cory Drake",
      role: "Defensive Assistant, Freshman Head Coach",
      bio: "Coach Drake is in his third year coaching high school football.  Cory works at The Ohio State University Medical Center as an EMT, he lives in Grandview Heights. Coach Drake is also the throwing coach for the track and field team at Dublin Scioto.",
    },
    {
      name: "Gabe Hover",
      role: "Running Backs",
      bio: "Coach Hoover is returning to the sideline for  his 23rd season of coaching, 18th with the Irish. Coach Hoover attended The Ohio State University and began coaching in 1997 at Buckeye Valley (his Alma Mater). He has been an Educator in Dublin since the fall of 1999 at various buildings and roles. Coach Hoover is currently teaching Health and Physical Education at Scioto. His wife, Georgia, is also a Scioto educator and school  counselor. Coach Hoover's two daughters (Alexis and Morgan) are Scioto grads and are now finishing at Kent State University.",
    },
    {
      name: "Arby Jones",
      role: "Strength Coordinator and Assistant O-Line Coach",
      bio: "Coach Jones is entering his 14th year with the Irish, working with all Irish athletes, running the strength and conditioning program and helping coach O-line.  Coach Jones graduated from Wake Forest University in 2006, where he was a three year starter on the offensive line and was a part of the Demon Deacons ACC Championship and Orange Bowl teams. Coach Jones teaches Basic Strength Training, Advanced Strength training, & Health at Scioto and lives in Dublin with his wife Kim and two sons, Liam & Sullivan, both future Irish students.",
    },
    {
      name: "Aleck Kelley",
      role: " Wide Receiver Coach, JV Head Coach",
      bio: "Coach Kelly is entering his 9th season as a coach with the Irish. Coach Kelly is a 2017 graduate from Dublin Scioto where he played football. Coach Kelly received his bachelor's degree in Special Education at Ohio Dominican University. He is going into his 4th year of teaching in Dublin and his first year at John Sells Middle School as an Intervention Specialist. Coach Kelly resides in Hilliard with his wife Nicole and dog Lucy.",
    },
    {
      name: "Blake Moeller",
      role: "Tight End Coach",
      bio: "Blake is starting his 11th year around the Scioto football program.  Blake Graduated from Dublin Scioto in 2015.  Blake graduated from Bowling Green State University in 2021 with a degree in Special Education.  Blake is an Intervention Specialist at Dublin Scioto and is excited and grateful for his opportunity to continue to work with students at Dublin Scioto.",
    },
    {
      name: "Dave Nosker",
      role: "Defensive Assistant",
      bio: "Coach Nosker will begin his 29th season with the Irish and 44th season coaching football in Dublin. Dave is a graduate of The Ohio State University and received his Masters Degree in Education Administration from Ashland University. Dave and his wife George Ann, reside in Dublin and are both retirees of the Dublin City Schools district. Dave and George Ann have 2 children Michael and Nichole, and 7 grandchildren: Mackenzie, Carson, Pierson, Madison, Jackson, Brixton and Cannon.",
    },
    {
      name: "Jason Reineck",
      role: "Corners Coach",
      bio: "Jason Reineck is a 2009 grad of Dublin Scioto and a 2014 grad in middle childhood education from The Ohio State University.  Coach Reineck was a three sport varsity athlete: football, basketball, track and field at Dublin Scioto. He was a member of the Ohio State track team and later became a valued member of the Buckeye Pistol team where he was a three time all-American and captain of their National Championship team in 2014. Coach Reineck works for Feazel Roofing and is also the proud owner of Same Shoes LLC, a business of shoe restoration/customization. He lives in Dublin with his wife Meghan and their two Mini-Australian Shepherds, Bodhi and Ruby.",
    },
    {
      name: "Tom Petre",
      role: "Offensive Coordinator and Quarterbacks",
      bio: "Coach Petre is entering his 20th season as a coach and his 1st season with the Irish. He teaches Physical Education and Health at Scioto and lives in Dublin with his wife, Patty, and their daughters, Audrina and Savannah.",
    },
    {
      name: "Drew Spencer",
      role: "Offensive Skill",
      bio: "Coach Spencer is in his 4th season with the Irish.  He is a Tiffin University graduate where he was a 4-year starter on the football team, all conference performer and Blackwatch Leadership Council member. Previously, Drew coached 10 seasons on both the collegiate and high school levels with stops at Capital University, Carnegie Mellon University, Ohio Dominican University and his alma mater Bellaire High School. Coach Spencer and his wife, Reanna, reside in Dublin with their two children Maverick and Landry.",
    },
    {
      name: "Drew Stagg",
      role: "LB Coach",
      bio: "Coach Stagg is a graduate of Walsh University, where he played both defensive and offensive line. This is his 17th year with the Irish, and he will be moving to the defensive side of the football. Previously, Drew was the wide receivers coach and Irish Head Freshman Coach. Coach Stagg teaches 8th-grade History at Davis Middle School. Coach Stagg has a bachelor’s degree in Education with a focus on integrated social studies. He also has his master's degree in curriculum and instruction and a master's degree in educational leadership from Miami University. Coach Stagg resides in Powell with his wife Krista and their two sons, Kaden and Koda  Stagg.",
    },
    {
      name: "Doug Tima",
      role: "OL Coach",
      bio: "Coach Doug Tima is in his 17th year with the Irish. Coach Tima graduated from Bucyrus High School in 2003. He received a BS in Physical Science and AYA Education from Otterbein University in 2007, where he was a four-year letterman, first team all OAC player, and a captain on the football team. In 2015 he received his Masters Degree in Educational Leadership from the University of Dayton. Coach Tima teaches Physics and Physical Science at Dublin Scioto High School. Coach Tima resides in Westerville with his wife Jessica.",
    },
    {
      name: "Dan Harris",
      role: "Defensive Secondary Coach",
      bio: "Coach Harris returns to Scioto for his 5th year after serving a two year stint as the Defensive Coordinator at Thomas Worthington, a position he also held at Olentangy High School where he coached from 2014-2018.  He and his wife Jennifer reside in the Scioto district with their four children Landon (Scioto ‘23), Bronwyn (‘27), Corbin (‘28) and Donovan (‘34). Coach Harris has a BA in History and an MEd in Social Studies from the Ohio State University and is in his 28th year of education, currently at Olentangy High School where he teaches AP US History and Honors World History.  Coach Harris is also the Head Coach of the Irish Swimming and Diving Team.",
    },
    {
      name: "John Witt",
      role: "Defensive Line Coach",
      bio: "Coach Witt is beginning year 22 at Scioto. He & his wife Kortney reside in Westerville with their four children Hannah, Zachary, Emma, & Gracie.",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center py-4 px-4 md:px-12">
      <PageTitle title="Coaching Staff" />
      <div className="overflow-x-auto max-w-6xl mx-auto mb-12">
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
                  {coach.name}
                </td>
                <td className="py-2 px-4 border-b text-[#014321]">
                  {coach.role}
                </td>
                <td className="py-2 px-4 border-b text-[#014321]">
                  {coach.bio}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;