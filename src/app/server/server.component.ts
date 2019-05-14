import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls:['./server.component.css']
})



export class ServerComponent{
serverId:number = 10;
serverStatus:string = 'offline';
getStatus(){
    return this.serverStatus;
}
/*****property bibding******** */
allowNewServer = false;
constructor(){
    setTimeout(()=>{
        this.allowNewServer = true;
    },2000);
}

}