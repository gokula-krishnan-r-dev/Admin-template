import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import dynamic from "next/dynamic";
const ServiceProviderCard = dynamic(() => import("./ServiceProviderCard"));
function DialogDetails({ children, row }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>{children}</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle>Service Provider Profile</DialogTitle>
          <DialogDescription>
            View the profile of the service provider
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-96">
          <div className="container mx-auto px-4">
            <div className="">
              <ServiceProviderCard key={row.sp_uid} provider={row} />
            </div>
          </div>
        </ScrollArea>
        <DialogFooter>
          <DialogClose>
            <Button type="submit">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogDetails;
