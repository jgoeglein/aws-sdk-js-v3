import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudFormationClient";
import { CancelUpdateStackInput } from "../models/index";
import {
  deserializeAws_queryCancelUpdateStackCommand,
  serializeAws_queryCancelUpdateStackCommand
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer
} from "@aws-sdk/types";

export type CancelUpdateStackCommandInput = CancelUpdateStackInput;
export type CancelUpdateStackCommandOutput = __MetadataBearer;

export class CancelUpdateStackCommand extends $Command<
  CancelUpdateStackCommandInput,
  CancelUpdateStackCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelUpdateStackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelUpdateStackCommandInput, CancelUpdateStackCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CancelUpdateStackCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryCancelUpdateStackCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CancelUpdateStackCommandOutput> {
    return deserializeAws_queryCancelUpdateStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}