import {TestBed} from '@angular/core/testing';
import {Template} from '../../../template/template.model';
import {PlayerInformation} from './player-information.model';


describe('Model Object PlayerInformation', () => {

  const PLAYER_INFORMATION_PLAYER = 'Daan van Berkel';
  const PLAYER_INFORMATION_CAMPAIGN = 'Paul\'s total party kill';
  const PLAYER_INFORMATION_CREATED_ON = new Date();

  let template: Template;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => template = new Template());

  it('should be created', () => {
    const playerInformation = new PlayerInformation(template)

    expect(playerInformation).toBeTruthy();
  });

  it('should contain the player from the template', () => {
    template.player = PLAYER_INFORMATION_PLAYER;

    const playerInformation = new PlayerInformation(template);

    expect(playerInformation.player).toEqual(PLAYER_INFORMATION_PLAYER);
  });

  it('should contain the campaign from the template', () => {
    template.campaign = PLAYER_INFORMATION_CAMPAIGN;

    const playerInformation = new PlayerInformation(template);

    expect(playerInformation.campaign).toEqual(PLAYER_INFORMATION_CAMPAIGN);
  });

  it('should contain the createdOn date from the template', () => {
    template.createdOn = PLAYER_INFORMATION_CREATED_ON;

    const playerInformation = new PlayerInformation(template);

    expect(playerInformation.createdOn).toEqual(PLAYER_INFORMATION_CREATED_ON);
  });

})
