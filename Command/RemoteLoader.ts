import { RemoteControl } from "./RemoteControl";
import { Light } from "./Light";
import { Command } from "./Command";
import { TVOffCommand } from "./TVOffCommand";
import { LightOnCommand } from "./LightOnCommand";
import { LightOffCommand } from "./LightOffCommand";
import { StereoOffCommand } from "./StereoOff";
import { RemoteControlWithUndo } from "./RemoteControlWithUndo";
import { StereoOnCommand } from "./StereoOnCommand";
import { HottubOnCommand } from "./HottubOnCommand";
import { HottubOffCommand } from "./HottubOffCommand";
import { Stereo } from "./Stereo";
import { TV } from "./TV";
import { TVOnCommand } from "./TVOnCommand";
import { HotTub } from "./HotTub";
import { MacroCommand } from "./MacroCommand";

export class RemoteLoader {
    static main(args: string[]): void {
        let remoteControl: RemoteControlWithUndo = new RemoteControlWithUndo();
        let light: Light = new Light("living room");
        let tv: TV = new TV("living room");
        let stereo: Stereo = new Stereo("living room");
        let hottub: HotTub = new HotTub();

        let lightOn: LightOnCommand = new LightOnCommand(light);
        let stereoOn: StereoOnCommand = new StereoOnCommand(stereo);
        let tvOn: TVOnCommand = new TVOnCommand(tv);
        let hottubOn: HottubOnCommand = new HottubOnCommand(hottub);

        let lightOff: LightOffCommand = new LightOffCommand(light);
        let stereoOff: StereoOffCommand = new StereoOffCommand(stereo);
        let tvOff: TVOffCommand = new TVOffCommand(tv);
        let hottubOff: HottubOffCommand = new HottubOffCommand(hottub);

        let partyOn: Command[] = [lightOn, stereoOn, tvOn, hottubOn];
        let partyOff: Command[] = [lightOff, stereoOff, tvOff, hottubOff];

        let partyOnMacro: MacroCommand = new MacroCommand(partyOn);
        let partyOffMacro: MacroCommand = new MacroCommand(partyOff);

        remoteControl.setCommand(0, partyOnMacro, partyOffMacro);
        console.log(remoteControl);
        console.log("- pushing macro on -");
        remoteControl.onButtonWasPushed(0);
        console.log("- pushing macro off - ");
        remoteControl.offButtonWasPushed(0);

        console.log("Lambda expression stuff here: ");
        // let livingRoomLight = new Light("Living room");
        // Typescript can't do the following, it gets upset that on and off don't return command types. The lambda function here works in java
        // remoteControl.setCommand(0, () => { livingRoomLight.on() },  () => { livingRoomLight.off() });
    }
}

let test = new RemoteLoader.main([]);