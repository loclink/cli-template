#!/usr/bin/env node
import { program } from 'commander';
import { COMMAND_NAME, PACKAGE_VERSION } from './config';

program
  .name(COMMAND_NAME)
  .version(PACKAGE_VERSION, '-v, --version')
  .showHelpAfterError()
  .description('cli项目模板')
  .parse(process.argv);
