import { serializeError } from 'serialize-error'
import winston from 'winston'
import { env } from './env'
import { debug } from 'debug'

export const winstonLogger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'backend' },
  transports: [
    new winston.transports.Console({
      format: winston.format.json(),
    }),
  ],
})

export const logger = {
  
  info: (logType: string, message: string, meta?: Record<string, any>) => {
    if (!debug.enabled(`idea:${logType}`)) {
      return
    }
    winstonLogger.info(message, { logType, ...meta })
  },
  error: (logType: string, error: any, meta?: Record<string, any>) => {
    if (!debug.enabled(`idea:${logType}`)) {
      return
    }
    const serializedError = serializeError(error)
    winstonLogger.error(serializedError.message || 'Unknown error', {
      logType,
      error,
      errorStack: serializedError.stack,
      ...meta,
    })
  },
}
