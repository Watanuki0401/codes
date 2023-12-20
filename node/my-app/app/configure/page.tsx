import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function demo() {
    return(
        <div className="flex items-center space-x-2">
            <Switch id="Status_setting" />
            <Label htmlFor="Status_setting">Status Selector</Label>
        </div>
    )
}