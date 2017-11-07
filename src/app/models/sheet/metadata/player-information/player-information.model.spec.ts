import {SheetTemplate} from '../../../sheet-template/sheet-template.model';
import {PlayerInformation} from './player-information.model';

describe('Model Object PlayerInformation', () => {

  const PLAYER_INFORMATION_PLAYER = 'Daan van Berkel';
  const PLAYER_INFORMATION_CAMPAIGN = 'Paul\'s total party kill';
  const PLAYER_INFORMATION_CREATED_ON = new Date();
  const PLAYER_INFORMATION_LAST_MODIFED = new Date();

  let template: SheetTemplate;

  beforeEach(() => template = new SheetTemplate());

  it('should be created', () => {
    const playerInformation = new PlayerInformation(template);

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

  it('should contain the lastModified date from the template', () => {
    template.lastModified = PLAYER_INFORMATION_LAST_MODIFED;

    const playerInformation = new PlayerInformation(template);

    expect(playerInformation.lastModified).toEqual(PLAYER_INFORMATION_LAST_MODIFED);
  });
});
