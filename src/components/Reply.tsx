import { Code, Eye, Image, Link2, Smile, UserMinus, X } from "lucide-react"
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Separator } from "./ui/separator"
import { Textarea } from "./ui/textarea"


type Props = {}

const Reply = (props: Props) => {
    return (
        <div className="absolute bottom-10 left-5" >
            <Popover >
                <PopoverTrigger className="flex justify-center items-center p-2 rounded-md gap-2 bg-blue-500">

                    Reply

                </PopoverTrigger>
                <PopoverContent className="rounded-xl" >
                    <div className="rounded-xl" >
                        <div className="flex justify-between p-2 bg-gray-800 rounded-t-xl ">
                            <h2 className="text-sm ">Reply</h2>
                            <X className="w-5 h-5" />
                        </div>
                        <Separator />
                        <div className="flex justify-start gap-2 p-2 ">
                            <h2 className="text-sm text-muted-foreground" >To:</h2>
                            <p className="text-sm text-muted-foreground" >jeanne@icloud.com</p>

                        </div>
                        <Separator />
                        <div className="flex justify-start gap-2 p-2 ">
                            <h2 className="text-sm text-muted-foreground" >From:</h2>
                            <p className="text-sm text-muted-foreground" >jean@icloud.com</p>

                        </div>
                        <Separator />
                        <div className="flex justify-start gap-2 p-2 ">
                            <h2 className="text-sm text-muted-foreground" >Subject:</h2>
                            <p className="text-sm text-muted-foreground" >Welcome</p>

                        </div>
                        <Separator />
                        <div className="w-full h-[200px]" >
                            <Textarea placeholder="hii jenny" className="w-full h-full" />

                        </div>
                        <Separator />
                        <div className="flex justify-start items-center gap-3 p-2 ">
                            <Button className="bg-blue-500" variant="secondary" >Send</Button>
                            <Button variant="ghost" className="text-xs text-muted-foreground "  >variable</Button>
                            <Button variant="ghost" className="text-xs text-muted-foreground" >preview mail</Button>
                            <span className="text-xs text-muted-foreground ">
                                <Link2 className="w-5 h-5" />
                            </span>
                            <span className="text-xs text-muted-foreground ">
                                <Image className="w-5 h-5" />
                            </span>
                            <span className="text-xs text-muted-foreground ">
                                <Smile className="w-5 h-5" />
                            </span>
                            <span className="text-xs text-muted-foreground ">
                                <UserMinus className="w-5 h-5" />
                            </span>
                            <span className="text-xs text-muted-foreground ">
                                <Code className="w-5 h-5" />
                            </span>

                        </div>


                    </div>

                </PopoverContent>
            </Popover>

        </div>
    )
}

export default Reply