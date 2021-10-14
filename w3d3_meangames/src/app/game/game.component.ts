import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {GamesDataService} from '../games-data.service'
import {Game} from '../games-list/games-list.component'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  
  title = "Games Details"
  game!:Game;
  gameId!:string;
  

  constructor(private gameDataService:GamesDataService, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
   this._Activatedroute.paramMap.subscribe(params => {
      this.gameId = String(params.get("gameId"));
    })

    console.log("game is: ", this.gameId);
    
    this.gameDataService.getGame(this.gameId).then(response=>this.game=response);
    
  }

  deleteFunction(event:any){

    // call function to delete

  }

}
