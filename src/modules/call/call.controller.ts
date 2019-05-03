import { Controller, Get, Req, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { CallService } from './call.service';
import { Request, Response } from 'express';

@Controller('calls')
export class CallController {
  constructor(private readonly callService: CallService) {}

  @Get('/')
  async getCalls(@Req() request: Request, @Res() response: Response) {
    const { headers } = request;

    if (!headers || headers.adminkey !== 'testTest') {
      response.status(HttpStatus.UNAUTHORIZED).send();
      return;
    }

    try {
      const mondayCalls = await this.callService.getCalls()
      return response
        .status(HttpStatus.OK)
        .json(mondayCalls);
    } catch (e) {
      throw Error(e);
    }
  }
}
