import { SimpleRemoteControl } from "./SimpleRemoteControl";
import { Light } from "./Light";
import { LightOnCommand } from "./LightOnCommand";
import { GarageDoor } from "./GarageDoor";
import { GarageDoorOpenCommand } from "./GarageDoorOpenCommand";

export class RemoteControlTest {

    static main(args: String[]): void {
        let remote: SimpleRemoteControl = new SimpleRemoteControl();
        let light: Light = new Light("");
        let garageDoor: GarageDoor = new GarageDoor();
        let lightOn: LightOnCommand = new LightOnCommand(light);
        let garageOpen: GarageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor);

        remote.setCommand(lightOn);
        remote.buttonWasPressed();
        remote.setCommand(garageOpen);
        remote.buttonWasPressed();
    }
}

let test = new RemoteControlTest.main([]);