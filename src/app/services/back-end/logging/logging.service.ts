import {Injectable} from '@angular/core';

@Injectable()
export class LoggingService {

  private static ERROR = 'ERROR - ';
  private static INFO = 'INFO - ';
  private static WARNING = 'WARNING - ';

  public warn(message: string) {
    console.log(LoggingService.WARNING + message);
  }

  public error(message: string) {
    console.log(LoggingService.ERROR + message);
  }

  public info(message: string) {
    console.log(LoggingService.INFO + message);
  }
}
