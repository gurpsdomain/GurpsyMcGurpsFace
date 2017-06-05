import {Injectable} from '@angular/core';

@Injectable()
export class LoggingService {

  private static ERROR = 'ERROR - ';
  private static INFO = 'INFO - ';
  private static WARNING = 'WARNING - ';

  public warn(message: string, object?: any) {
    console.log(LoggingService.WARNING + message, object);
  }

  public error(message: string, object?: any) {
    console.log(LoggingService.ERROR + message, object);
  }

  public info(message: string, object?: any) {
    console.log(LoggingService.INFO + message, object);
  }
}
