"use client"

import { ArrowBigDown, ChevronDown, Ellipsis, Mail, MailOpen, RotateCw, Search, Send } from "lucide-react"
import AllEmails from "./AllEmails"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import WorkspaceDropdown from "./WorkspaceDropdown"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Separator } from "./ui/separator"
import Image from "next/image"
import Reply from "./Reply"
import { useEffect, useState } from "react"
import axios from "axios"


type Props = {}

const EmailWorkspace = (props: Props) => {

    const { theme } = useTheme()
    const token = localStorage.getItem("token")
    const [emails, setEmails] = useState([])

    useEffect(() => {
      
        const getEmails = async() => {
            try {
                    const response = await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    console.log(response.data);
                    setEmails(response.data.data);
                    
                 
                } catch (error) {
                    console.error("Error fetching emails:", error);
                }
        }
        getEmails()
    }, [token])

    return (
        <div className="grid grid-cols-12 w-full h-full" >
            {/* col1 */}
            <div className="col-span-3  h-full p-3 border-r border-gray-800">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-start items-start gap-2" >
                        <h1 className="flex justify-center items-center  gap-2 text-xl font-bold text-blue-500" >All Inbox(s) <ChevronDown /> </h1>
                        <div className="flex items-center gap-1" >
                            <span className="font-bold" >25/25</span>
                            <span className="text-sm text-muted-foreground" >Inboxes selected</span>
                        </div>
                    </div>
                    <div>
                        <Button variant="ghost" className={cn("p-2 bg-slate-800",
                            { "bg-gray-200": theme === "light" }
                        )}><RotateCw className="w-5 h-5" /></Button>
                    </div>

                </div>
                <div className="mt-5">
                    <div>
                        <Input placeholder="Search" />
                    </div>
                    <div className="flex justify-between items-center mt-2" >
                        <div className="flex justify-center items-center gap-2" >
                            <span className={cn(`text-blue-600 bg-slate-800 rounded-full text-sm font-bold p-1 px-2`, { "bg-slate-300": theme === "light" })} >26</span>
                            <p className="text-sm font-bold" >New Replies</p>
                        </div>
                        <div>
                            <WorkspaceDropdown lable="Newest" />

                        </div>
                    </div>
                </div>
                <AllEmails token={token} emails={emails} />
            </div>
            <div className=" relative col-span-6  ">
                <div className="flex justify-between items-center p-2" >
                    <div className="flex flex-col p-2 gap-1">
                        <h2 className="text-md font-semibold" >Orlando</h2>
                        <p className="text-xs text-muted-foreground" >orlando@gmail.com</p>
                    </div>
                    <div className="flex justify-center items-center gap-2" >
                        <div className="bg-gray-800 px-1 rounded-lg flex justify-center items-center " >
                            <span className="rounded-full bg-yellow-400 w-3 h-3" />
                            <WorkspaceDropdown lable="Meeting Completed" />
                        </div>
                        <div className="bg-gray-800 px-1 rounded-lg flex justify-center items-center " >
                            <WorkspaceDropdown lable="Move" />
                        </div>
                        <div className="bg-gray-800 py-1 px-2 rounded-lg flex justify-center items-center " >
                            <Ellipsis className="w-5 h-5" />
                        </div>
                    </div>
                </div>
                <Reply />
                <Separator />
                {/* <div className=" flex mt-5 justify-center items-center" >
                    <Separator/>
                    <span className="bg-gray-800 text-xs text-muted-foreground p-2" >Today</span>
                    <Separator/>
                </div> */}
            </div>
            <div className="col-span-3 p-3  border-l border-gray-800 ">
                <div className="bg-gray-800 rounded-md p-2" >
                    <h1 className="text-sm font-semibold" >Lead Details</h1>
                </div>
                <div className="flex flex-col  gap-5 mt-3">
                    <div className="flex justify-between items-center gap-2" >
                        <p className="text-sm " >Name</p>
                        <p className="text-sm text-gray-300" >Orlando</p>
                    </div>
                    <div className="flex justify-between items-center gap-2" >
                        <p className="text-sm " >Email</p>
                        <p className="text-sm text-gray-300" >orlando@gmail.com</p>
                    </div>
                    <div className="flex justify-between items-center gap-2" >
                        <p className="text-sm " >Contact No.</p>
                        <p className="text-sm text-gray-300" >+1 123 456 7890</p>
                    </div>
                    <div className="flex justify-between items-center gap-2" >
                        <p className="text-sm " >Linkedin</p>
                        <p className="text-sm text-gray-300" >linkedin.com/in/timvadde/</p>
                    </div>
                    <div className="flex justify-between items-center gap-2" >
                        <p className="text-sm " >Company Name</p>
                        <p className="text-sm text-gray-300" >Reachinbox</p>
                    </div>
                </div>
                <div className="bg-gray-800 rounded-md p-2 mt-4" >
                    <h1 className="text-sm font-semibold" >Activities</h1>
                </div>
                <div className="flex flex-col p-3">
                    <div className="mt-2">
                        <h2 className="text-sm font-semibold" >Campaign Name</h2>
                    </div>
                    <div className="flex justify-center items-center gap-2 mt-5">
                        <p className="text-sm">
                            3 Steps
                        </p>
                        <Separator className="h-6 " orientation="vertical" />
                        <p className="text-sm">
                            5 Days in Sequence
                        </p>
                    </div>
                </div>
                <div className="relative flex justify-start items-center gap-4 p-3">
                    <div className="rounded-full border border-slate-500 bg-gray-800 w-fit p-2" >
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-md" >Step 1: Email</p>
                        <div className="flex items-center gap-2">
                            <Send className="w-4 h-4 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground" >sent <span className="font-bold" >3rd, Feb</span></p>
                        </div>
                    </div>
                    <Separator className="h-12 absolute -bottom-5 left-8 -z-10" orientation="vertical" />
                </div>
                <div className="relative flex justify-start items-center gap-4 p-3">
                    <div className="rounded-full border border-slate-500 bg-gray-800 w-fit p-2" >
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-md" >Step 2: Email</p>
                        <div className="flex items-center gap-2">
                            <MailOpen className="w-4 h-4 text-yellow-400" />
                            <p className="text-sm text-muted-foreground" >opened <span className="font-bold" >3rd, Feb</span></p>
                        </div>
                    </div>
                    <Separator className="h-12 absolute -bottom-5 left-8 -z-10" orientation="vertical" />
                </div>
                <div className="flex justify-start items-center gap-4 p-3">
                    <div className="rounded-full border border-slate-500 bg-gray-800 w-fit p-2" >
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-md" >Step 3: Email</p>
                        <div className="flex items-center gap-2">
                            <MailOpen className="w-4 h-4 text-yellow-400" />
                            <p className="text-sm text-muted-foreground" >opened <span className="font-bold" >3rd, Feb</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailWorkspace