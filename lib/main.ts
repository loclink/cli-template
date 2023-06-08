#!/usr/bin/env node
import { program } from 'commander';
import { PACKAGE_VERSION } from './config';

program.name('cli').version(PACKAGE_VERSION, '-v, --version').showHelpAfterError().description('cli项目模板');
