import { Button } from "@/components/ui/button"
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Project from "./project";
import Contact from "./contact";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Detail() {
  return (
    <Tabs defaultValue="Education" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-5">
        {/* Tabs Trigger Button */}
        <TabsTrigger value="education" className=" hover:bg-gray-500 hover:rounded-[20px]">Education</TabsTrigger>
        <TabsTrigger value="experience"className=" hover:bg-gray-500 hover:rounded-[20px]">Experience</TabsTrigger>
        <TabsTrigger value="skills"className=" hover:bg-gray-500 hover:rounded-[20px]">Skills</TabsTrigger>
        <TabsTrigger value="projects"className=" hover:bg-gray-500 hover:rounded-[20px]">Projects</TabsTrigger>
        <TabsTrigger value="contact"className=" hover:bg-gray-500 hover:rounded-[20px]">Contact</TabsTrigger>
      </TabsList>

      {/* Tabs Content Here */}
      {/* Education */}
      <TabsContent value="education">
        <Education/>
      </TabsContent>

      {/* Experience */}
      <TabsContent value="experience">
      <Experience/>
      </TabsContent>

      {/* Skills */}
      <TabsContent value="skills">
      <Skills/>
      </TabsContent>

      {/* Projects */}
      <TabsContent value="projects">
      <Project/>
      </TabsContent>

      
      {/* Projects */}
      <TabsContent value="contact">
      <Contact/>
      </TabsContent>
    </Tabs>
  );
}






