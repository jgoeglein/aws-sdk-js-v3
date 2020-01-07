import {
  ComprehendClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ComprehendClient";
import { UpdateEndpointRequest, UpdateEndpointResponse } from "../models/index";
import {
  deserializeAws_json1_1UpdateEndpointCommand,
  serializeAws_json1_1UpdateEndpointCommand
} from "../protocols/Aws_json1_1";
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
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type UpdateEndpointCommandInput = UpdateEndpointRequest;
export type UpdateEndpointCommandOutput = UpdateEndpointResponse;

export class UpdateEndpointCommand extends $Command<
  UpdateEndpointCommandInput,
  UpdateEndpointCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEndpointCommandInput, UpdateEndpointCommandOutput> {
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
    input: UpdateEndpointCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateEndpointCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateEndpointCommandOutput> {
    return deserializeAws_json1_1UpdateEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}