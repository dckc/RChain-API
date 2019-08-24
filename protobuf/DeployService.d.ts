import * as $protobuf from "protobufjs";
export namespace coop {

    namespace rchain {

        namespace casper {

            namespace protocol {

                class DeployService extends $protobuf.rpc.Service {
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DeployService;
                    public doDeploy(request: coop.rchain.casper.protocol.IDeployData, callback: coop.rchain.casper.protocol.DeployService.DoDeployCallback): void;
                    public doDeploy(request: coop.rchain.casper.protocol.IDeployData): Promise<Either>;
                    public getBlock(request: coop.rchain.casper.protocol.IBlockQuery, callback: coop.rchain.casper.protocol.DeployService.getBlockCallback): void;
                    public getBlock(request: coop.rchain.casper.protocol.IBlockQuery): Promise<Either>;
                    public visualizeDag(request: coop.rchain.casper.protocol.IVisualizeDagQuery, callback: coop.rchain.casper.protocol.DeployService.visualizeDagCallback): void;
                    public visualizeDag(request: coop.rchain.casper.protocol.IVisualizeDagQuery): Promise<Either>;
                    public machineVerifiableDag(request: coop.rchain.casper.protocol.IMachineVerifyQuery, callback: coop.rchain.casper.protocol.DeployService.machineVerifiableDagCallback): void;
                    public machineVerifiableDag(request: coop.rchain.casper.protocol.IMachineVerifyQuery): Promise<Either>;
                    public showMainChain(request: coop.rchain.casper.protocol.IBlocksQuery, callback: coop.rchain.casper.protocol.DeployService.showMainChainCallback): void;
                    public showMainChain(request: coop.rchain.casper.protocol.IBlocksQuery): Promise<Either>;
                    public getBlocks(request: coop.rchain.casper.protocol.IBlocksQuery, callback: coop.rchain.casper.protocol.DeployService.getBlocksCallback): void;
                    public getBlocks(request: coop.rchain.casper.protocol.IBlocksQuery): Promise<Either>;
                    public listenForDataAtName(request: coop.rchain.casper.protocol.IDataAtNameQuery, callback: coop.rchain.casper.protocol.DeployService.listenForDataAtNameCallback): void;
                    public listenForDataAtName(request: coop.rchain.casper.protocol.IDataAtNameQuery): Promise<Either>;
                    public listenForContinuationAtName(request: coop.rchain.casper.protocol.IContinuationAtNameQuery, callback: coop.rchain.casper.protocol.DeployService.listenForContinuationAtNameCallback): void;
                    public listenForContinuationAtName(request: coop.rchain.casper.protocol.IContinuationAtNameQuery): Promise<Either>;
                    public findBlockWithDeploy(request: coop.rchain.casper.protocol.IFindDeployInBlockQuery, callback: coop.rchain.casper.protocol.DeployService.findBlockWithDeployCallback): void;
                    public findBlockWithDeploy(request: coop.rchain.casper.protocol.IFindDeployInBlockQuery): Promise<Either>;
                    public findDeploy(request: coop.rchain.casper.protocol.IFindDeployQuery, callback: coop.rchain.casper.protocol.DeployService.findDeployCallback): void;
                    public findDeploy(request: coop.rchain.casper.protocol.IFindDeployQuery): Promise<Either>;
                    public previewPrivateNames(request: coop.rchain.casper.protocol.IPrivateNamePreviewQuery, callback: coop.rchain.casper.protocol.DeployService.previewPrivateNamesCallback): void;
                    public previewPrivateNames(request: coop.rchain.casper.protocol.IPrivateNamePreviewQuery): Promise<Either>;
                    public lastFinalizedBlock(request: coop.rchain.casper.protocol.ILastFinalizedBlockQuery, callback: coop.rchain.casper.protocol.DeployService.lastFinalizedBlockCallback): void;
                    public lastFinalizedBlock(request: coop.rchain.casper.protocol.ILastFinalizedBlockQuery): Promise<Either>;
                }

                namespace DeployService {

                    type DoDeployCallback = (error: (Error|null), response?: Either) => void;

                    type getBlockCallback = (error: (Error|null), response?: Either) => void;

                    type visualizeDagCallback = (error: (Error|null), response?: Either) => void;

                    type machineVerifiableDagCallback = (error: (Error|null), response?: Either) => void;

                    type showMainChainCallback = (error: (Error|null), response?: Either) => void;

                    type getBlocksCallback = (error: (Error|null), response?: Either) => void;

                    type listenForDataAtNameCallback = (error: (Error|null), response?: Either) => void;

                    type listenForContinuationAtNameCallback = (error: (Error|null), response?: Either) => void;

                    type findBlockWithDeployCallback = (error: (Error|null), response?: Either) => void;

                    type findDeployCallback = (error: (Error|null), response?: Either) => void;

                    type previewPrivateNamesCallback = (error: (Error|null), response?: Either) => void;

                    type lastFinalizedBlockCallback = (error: (Error|null), response?: Either) => void;
                }

                interface IFindDeployQuery {
                    deployId?: (Uint8Array|null);
                }

                class FindDeployQuery implements IFindDeployQuery {
                    constructor(properties?: coop.rchain.casper.protocol.IFindDeployQuery);
                    public deployId: Uint8Array;
                    public static create(properties?: coop.rchain.casper.protocol.IFindDeployQuery): coop.rchain.casper.protocol.FindDeployQuery;
                    public static encode(message: coop.rchain.casper.protocol.IFindDeployQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IFindDeployQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.FindDeployQuery;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.FindDeployQuery;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.FindDeployQuery;
                    public static toObject(message: coop.rchain.casper.protocol.FindDeployQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IFindDeployInBlockQuery {
                    user?: (Uint8Array|null);
                    timestamp?: (number|Long|null);
                }

                class FindDeployInBlockQuery implements IFindDeployInBlockQuery {
                    constructor(properties?: coop.rchain.casper.protocol.IFindDeployInBlockQuery);
                    public user: Uint8Array;
                    public timestamp: (number|Long);
                    public static create(properties?: coop.rchain.casper.protocol.IFindDeployInBlockQuery): coop.rchain.casper.protocol.FindDeployInBlockQuery;
                    public static encode(message: coop.rchain.casper.protocol.IFindDeployInBlockQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IFindDeployInBlockQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.FindDeployInBlockQuery;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.FindDeployInBlockQuery;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.FindDeployInBlockQuery;
                    public static toObject(message: coop.rchain.casper.protocol.FindDeployInBlockQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IBlockQuery {
                    hash?: (string|null);
                }

                class BlockQuery implements IBlockQuery {
                    constructor(properties?: coop.rchain.casper.protocol.IBlockQuery);
                    public hash: string;
                    public static create(properties?: coop.rchain.casper.protocol.IBlockQuery): coop.rchain.casper.protocol.BlockQuery;
                    public static encode(message: coop.rchain.casper.protocol.IBlockQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IBlockQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.BlockQuery;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.BlockQuery;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.BlockQuery;
                    public static toObject(message: coop.rchain.casper.protocol.BlockQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IBlocksQuery {
                    depth?: (number|null);
                }

                class BlocksQuery implements IBlocksQuery {
                    constructor(properties?: coop.rchain.casper.protocol.IBlocksQuery);
                    public depth: number;
                    public static create(properties?: coop.rchain.casper.protocol.IBlocksQuery): coop.rchain.casper.protocol.BlocksQuery;
                    public static encode(message: coop.rchain.casper.protocol.IBlocksQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IBlocksQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.BlocksQuery;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.BlocksQuery;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.BlocksQuery;
                    public static toObject(message: coop.rchain.casper.protocol.BlocksQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IDataAtNameQuery {
                    depth?: (number|null);
                    name?: (IPar|null);
                }

                class DataAtNameQuery implements IDataAtNameQuery {
                    constructor(properties?: coop.rchain.casper.protocol.IDataAtNameQuery);
                    public depth: number;
                    public name?: (IPar|null);
                    public static create(properties?: coop.rchain.casper.protocol.IDataAtNameQuery): coop.rchain.casper.protocol.DataAtNameQuery;
                    public static encode(message: coop.rchain.casper.protocol.IDataAtNameQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IDataAtNameQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.DataAtNameQuery;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.DataAtNameQuery;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.DataAtNameQuery;
                    public static toObject(message: coop.rchain.casper.protocol.DataAtNameQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IContinuationAtNameQuery {
                    depth?: (number|null);
                    names?: (IPar[]|null);
                }

                class ContinuationAtNameQuery implements IContinuationAtNameQuery {
                    constructor(properties?: coop.rchain.casper.protocol.IContinuationAtNameQuery);
                    public depth: number;
                    public names: IPar[];
                    public static create(properties?: coop.rchain.casper.protocol.IContinuationAtNameQuery): coop.rchain.casper.protocol.ContinuationAtNameQuery;
                    public static encode(message: coop.rchain.casper.protocol.IContinuationAtNameQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IContinuationAtNameQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.ContinuationAtNameQuery;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.ContinuationAtNameQuery;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.ContinuationAtNameQuery;
                    public static toObject(message: coop.rchain.casper.protocol.ContinuationAtNameQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IDeployServiceResponse {
                    message?: (string|null);
                }

                class DeployServiceResponse implements IDeployServiceResponse {
                    constructor(properties?: coop.rchain.casper.protocol.IDeployServiceResponse);
                    public message: string;
                    public static create(properties?: coop.rchain.casper.protocol.IDeployServiceResponse): coop.rchain.casper.protocol.DeployServiceResponse;
                    public static encode(message: coop.rchain.casper.protocol.IDeployServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IDeployServiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.DeployServiceResponse;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.DeployServiceResponse;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.DeployServiceResponse;
                    public static toObject(message: coop.rchain.casper.protocol.DeployServiceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IBlockQueryResponse {
                    blockInfo?: (coop.rchain.casper.protocol.IBlockInfo|null);
                }

                class BlockQueryResponse implements IBlockQueryResponse {
                    constructor(properties?: coop.rchain.casper.protocol.IBlockQueryResponse);
                    public blockInfo?: (coop.rchain.casper.protocol.IBlockInfo|null);
                    public static create(properties?: coop.rchain.casper.protocol.IBlockQueryResponse): coop.rchain.casper.protocol.BlockQueryResponse;
                    public static encode(message: coop.rchain.casper.protocol.IBlockQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IBlockQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.BlockQueryResponse;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.BlockQueryResponse;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.BlockQueryResponse;
                    public static toObject(message: coop.rchain.casper.protocol.BlockQueryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ILightBlockQueryResponse {
                    blockInfo?: (coop.rchain.casper.protocol.ILightBlockInfo|null);
                }

                class LightBlockQueryResponse implements ILightBlockQueryResponse {
                    constructor(properties?: coop.rchain.casper.protocol.ILightBlockQueryResponse);
                    public blockInfo?: (coop.rchain.casper.protocol.ILightBlockInfo|null);
                    public static create(properties?: coop.rchain.casper.protocol.ILightBlockQueryResponse): coop.rchain.casper.protocol.LightBlockQueryResponse;
                    public static encode(message: coop.rchain.casper.protocol.ILightBlockQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.ILightBlockQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.LightBlockQueryResponse;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.LightBlockQueryResponse;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.LightBlockQueryResponse;
                    public static toObject(message: coop.rchain.casper.protocol.LightBlockQueryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IVisualizeDagQuery {
                    depth?: (number|null);
                    showJustificationLines?: (boolean|null);
                }

                class VisualizeDagQuery implements IVisualizeDagQuery {
                    constructor(properties?: coop.rchain.casper.protocol.IVisualizeDagQuery);
                    public depth: number;
                    public showJustificationLines: boolean;
                    public static create(properties?: coop.rchain.casper.protocol.IVisualizeDagQuery): coop.rchain.casper.protocol.VisualizeDagQuery;
                    public static encode(message: coop.rchain.casper.protocol.IVisualizeDagQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IVisualizeDagQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.VisualizeDagQuery;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.VisualizeDagQuery;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.VisualizeDagQuery;
                    public static toObject(message: coop.rchain.casper.protocol.VisualizeDagQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IVisualizeBlocksResponse {
                    content?: (string|null);
                }

                class VisualizeBlocksResponse implements IVisualizeBlocksResponse {
                    constructor(properties?: coop.rchain.casper.protocol.IVisualizeBlocksResponse);
                    public content: string;
                    public static create(properties?: coop.rchain.casper.protocol.IVisualizeBlocksResponse): coop.rchain.casper.protocol.VisualizeBlocksResponse;
                    public static encode(message: coop.rchain.casper.protocol.IVisualizeBlocksResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IVisualizeBlocksResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.VisualizeBlocksResponse;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.VisualizeBlocksResponse;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.VisualizeBlocksResponse;
                    public static toObject(message: coop.rchain.casper.protocol.VisualizeBlocksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IMachineVerifyQuery {
                }

                class MachineVerifyQuery implements IMachineVerifyQuery {
                    constructor(properties?: coop.rchain.casper.protocol.IMachineVerifyQuery);
                    public static create(properties?: coop.rchain.casper.protocol.IMachineVerifyQuery): coop.rchain.casper.protocol.MachineVerifyQuery;
                    public static encode(message: coop.rchain.casper.protocol.IMachineVerifyQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IMachineVerifyQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.MachineVerifyQuery;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.MachineVerifyQuery;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.MachineVerifyQuery;
                    public static toObject(message: coop.rchain.casper.protocol.MachineVerifyQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IMachineVerifyResponse {
                    content?: (string|null);
                }

                class MachineVerifyResponse implements IMachineVerifyResponse {
                    constructor(properties?: coop.rchain.casper.protocol.IMachineVerifyResponse);
                    public content: string;
                    public static create(properties?: coop.rchain.casper.protocol.IMachineVerifyResponse): coop.rchain.casper.protocol.MachineVerifyResponse;
                    public static encode(message: coop.rchain.casper.protocol.IMachineVerifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IMachineVerifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.MachineVerifyResponse;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.MachineVerifyResponse;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.MachineVerifyResponse;
                    public static toObject(message: coop.rchain.casper.protocol.MachineVerifyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IListeningNameDataResponse {
                    blockResults?: (coop.rchain.casper.protocol.IDataWithBlockInfo[]|null);
                    length?: (number|null);
                }

                class ListeningNameDataResponse implements IListeningNameDataResponse {
                    constructor(properties?: coop.rchain.casper.protocol.IListeningNameDataResponse);
                    public blockResults: coop.rchain.casper.protocol.IDataWithBlockInfo[];
                    public length: number;
                    public static create(properties?: coop.rchain.casper.protocol.IListeningNameDataResponse): coop.rchain.casper.protocol.ListeningNameDataResponse;
                    public static encode(message: coop.rchain.casper.protocol.IListeningNameDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IListeningNameDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.ListeningNameDataResponse;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.ListeningNameDataResponse;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.ListeningNameDataResponse;
                    public static toObject(message: coop.rchain.casper.protocol.ListeningNameDataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IListeningNameContinuationResponse {
                    blockResults?: (coop.rchain.casper.protocol.IContinuationsWithBlockInfo[]|null);
                    length?: (number|null);
                }

                class ListeningNameContinuationResponse implements IListeningNameContinuationResponse {
                    constructor(properties?: coop.rchain.casper.protocol.IListeningNameContinuationResponse);
                    public blockResults: coop.rchain.casper.protocol.IContinuationsWithBlockInfo[];
                    public length: number;
                    public static create(properties?: coop.rchain.casper.protocol.IListeningNameContinuationResponse): coop.rchain.casper.protocol.ListeningNameContinuationResponse;
                    public static encode(message: coop.rchain.casper.protocol.IListeningNameContinuationResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IListeningNameContinuationResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.ListeningNameContinuationResponse;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.ListeningNameContinuationResponse;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.ListeningNameContinuationResponse;
                    public static toObject(message: coop.rchain.casper.protocol.ListeningNameContinuationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IPrivateNamePreviewQuery {
                    user?: (Uint8Array|null);
                    timestamp?: (number|Long|null);
                    nameQty?: (number|null);
                }

                class PrivateNamePreviewQuery implements IPrivateNamePreviewQuery {
                    constructor(properties?: coop.rchain.casper.protocol.IPrivateNamePreviewQuery);
                    public user: Uint8Array;
                    public timestamp: (number|Long);
                    public nameQty: number;
                    public static create(properties?: coop.rchain.casper.protocol.IPrivateNamePreviewQuery): coop.rchain.casper.protocol.PrivateNamePreviewQuery;
                    public static encode(message: coop.rchain.casper.protocol.IPrivateNamePreviewQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IPrivateNamePreviewQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.PrivateNamePreviewQuery;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.PrivateNamePreviewQuery;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.PrivateNamePreviewQuery;
                    public static toObject(message: coop.rchain.casper.protocol.PrivateNamePreviewQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IPrivateNamePreviewResponse {
                    ids?: (Uint8Array[]|null);
                }

                class PrivateNamePreviewResponse implements IPrivateNamePreviewResponse {
                    constructor(properties?: coop.rchain.casper.protocol.IPrivateNamePreviewResponse);
                    public ids: Uint8Array[];
                    public static create(properties?: coop.rchain.casper.protocol.IPrivateNamePreviewResponse): coop.rchain.casper.protocol.PrivateNamePreviewResponse;
                    public static encode(message: coop.rchain.casper.protocol.IPrivateNamePreviewResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IPrivateNamePreviewResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.PrivateNamePreviewResponse;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.PrivateNamePreviewResponse;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.PrivateNamePreviewResponse;
                    public static toObject(message: coop.rchain.casper.protocol.PrivateNamePreviewResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ILastFinalizedBlockQuery {
                }

                class LastFinalizedBlockQuery implements ILastFinalizedBlockQuery {
                    constructor(properties?: coop.rchain.casper.protocol.ILastFinalizedBlockQuery);
                    public static create(properties?: coop.rchain.casper.protocol.ILastFinalizedBlockQuery): coop.rchain.casper.protocol.LastFinalizedBlockQuery;
                    public static encode(message: coop.rchain.casper.protocol.ILastFinalizedBlockQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.ILastFinalizedBlockQuery, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.LastFinalizedBlockQuery;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.LastFinalizedBlockQuery;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.LastFinalizedBlockQuery;
                    public static toObject(message: coop.rchain.casper.protocol.LastFinalizedBlockQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ILastFinalizedBlockResponse {
                    blockInfo?: (coop.rchain.casper.protocol.IBlockInfo|null);
                }

                class LastFinalizedBlockResponse implements ILastFinalizedBlockResponse {
                    constructor(properties?: coop.rchain.casper.protocol.ILastFinalizedBlockResponse);
                    public blockInfo?: (coop.rchain.casper.protocol.IBlockInfo|null);
                    public static create(properties?: coop.rchain.casper.protocol.ILastFinalizedBlockResponse): coop.rchain.casper.protocol.LastFinalizedBlockResponse;
                    public static encode(message: coop.rchain.casper.protocol.ILastFinalizedBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.ILastFinalizedBlockResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.LastFinalizedBlockResponse;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.LastFinalizedBlockResponse;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.LastFinalizedBlockResponse;
                    public static toObject(message: coop.rchain.casper.protocol.LastFinalizedBlockResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ILightBlockInfo {
                    blockHash?: (string|null);
                    blockSize?: (string|null);
                    blockNumber?: (number|Long|null);
                    version?: (number|Long|null);
                    deployCount?: (number|null);
                    tupleSpaceHash?: (string|null);
                    timestamp?: (number|Long|null);
                    faultTolerance?: (number|null);
                    mainParentHash?: (string|null);
                    parentsHashList?: (string[]|null);
                    sender?: (string|null);
                }

                class LightBlockInfo implements ILightBlockInfo {
                    constructor(properties?: coop.rchain.casper.protocol.ILightBlockInfo);
                    public blockHash: string;
                    public blockSize: string;
                    public blockNumber: (number|Long);
                    public version: (number|Long);
                    public deployCount: number;
                    public tupleSpaceHash: string;
                    public timestamp: (number|Long);
                    public faultTolerance: number;
                    public mainParentHash: string;
                    public parentsHashList: string[];
                    public sender: string;
                    public static create(properties?: coop.rchain.casper.protocol.ILightBlockInfo): coop.rchain.casper.protocol.LightBlockInfo;
                    public static encode(message: coop.rchain.casper.protocol.ILightBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.ILightBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.LightBlockInfo;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.LightBlockInfo;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.LightBlockInfo;
                    public static toObject(message: coop.rchain.casper.protocol.LightBlockInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IBlockInfo {
                    blockHash?: (string|null);
                    blockSize?: (string|null);
                    blockNumber?: (number|Long|null);
                    version?: (number|Long|null);
                    deployCount?: (number|null);
                    tupleSpaceHash?: (string|null);
                    timestamp?: (number|Long|null);
                    faultTolerance?: (number|null);
                    mainParentHash?: (string|null);
                    parentsHashList?: (string[]|null);
                    sender?: (string|null);
                    shardId?: (string|null);
                    bondsValidatorList?: (string[]|null);
                    deployCost?: (string[]|null);
                }

                class BlockInfo implements IBlockInfo {
                    constructor(properties?: coop.rchain.casper.protocol.IBlockInfo);
                    public blockHash: string;
                    public blockSize: string;
                    public blockNumber: (number|Long);
                    public version: (number|Long);
                    public deployCount: number;
                    public tupleSpaceHash: string;
                    public timestamp: (number|Long);
                    public faultTolerance: number;
                    public mainParentHash: string;
                    public parentsHashList: string[];
                    public sender: string;
                    public shardId: string;
                    public bondsValidatorList: string[];
                    public deployCost: string[];
                    public static create(properties?: coop.rchain.casper.protocol.IBlockInfo): coop.rchain.casper.protocol.BlockInfo;
                    public static encode(message: coop.rchain.casper.protocol.IBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.BlockInfo;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.BlockInfo;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.BlockInfo;
                    public static toObject(message: coop.rchain.casper.protocol.BlockInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IDataWithBlockInfo {
                    postBlockData?: (IPar[]|null);
                    block?: (coop.rchain.casper.protocol.ILightBlockInfo|null);
                }

                class DataWithBlockInfo implements IDataWithBlockInfo {
                    constructor(properties?: coop.rchain.casper.protocol.IDataWithBlockInfo);
                    public postBlockData: IPar[];
                    public block?: (coop.rchain.casper.protocol.ILightBlockInfo|null);
                    public static create(properties?: coop.rchain.casper.protocol.IDataWithBlockInfo): coop.rchain.casper.protocol.DataWithBlockInfo;
                    public static encode(message: coop.rchain.casper.protocol.IDataWithBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IDataWithBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.DataWithBlockInfo;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.DataWithBlockInfo;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.DataWithBlockInfo;
                    public static toObject(message: coop.rchain.casper.protocol.DataWithBlockInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IContinuationsWithBlockInfo {
                    postBlockContinuations?: (coop.rchain.casper.protocol.IWaitingContinuationInfo[]|null);
                    block?: (coop.rchain.casper.protocol.ILightBlockInfo|null);
                }

                class ContinuationsWithBlockInfo implements IContinuationsWithBlockInfo {
                    constructor(properties?: coop.rchain.casper.protocol.IContinuationsWithBlockInfo);
                    public postBlockContinuations: coop.rchain.casper.protocol.IWaitingContinuationInfo[];
                    public block?: (coop.rchain.casper.protocol.ILightBlockInfo|null);
                    public static create(properties?: coop.rchain.casper.protocol.IContinuationsWithBlockInfo): coop.rchain.casper.protocol.ContinuationsWithBlockInfo;
                    public static encode(message: coop.rchain.casper.protocol.IContinuationsWithBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IContinuationsWithBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.ContinuationsWithBlockInfo;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.ContinuationsWithBlockInfo;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.ContinuationsWithBlockInfo;
                    public static toObject(message: coop.rchain.casper.protocol.ContinuationsWithBlockInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IWaitingContinuationInfo {
                    postBlockPatterns?: (IBindPattern[]|null);
                    postBlockContinuation?: (IPar|null);
                }

                class WaitingContinuationInfo implements IWaitingContinuationInfo {
                    constructor(properties?: coop.rchain.casper.protocol.IWaitingContinuationInfo);
                    public postBlockPatterns: IBindPattern[];
                    public postBlockContinuation?: (IPar|null);
                    public static create(properties?: coop.rchain.casper.protocol.IWaitingContinuationInfo): coop.rchain.casper.protocol.WaitingContinuationInfo;
                    public static encode(message: coop.rchain.casper.protocol.IWaitingContinuationInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IWaitingContinuationInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.WaitingContinuationInfo;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.WaitingContinuationInfo;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.WaitingContinuationInfo;
                    public static toObject(message: coop.rchain.casper.protocol.WaitingContinuationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IHasBlockRequest {
                    hash?: (Uint8Array|null);
                }

                class HasBlockRequest implements IHasBlockRequest {
                    constructor(properties?: coop.rchain.casper.protocol.IHasBlockRequest);
                    public hash: Uint8Array;
                    public static create(properties?: coop.rchain.casper.protocol.IHasBlockRequest): coop.rchain.casper.protocol.HasBlockRequest;
                    public static encode(message: coop.rchain.casper.protocol.IHasBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IHasBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.HasBlockRequest;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.HasBlockRequest;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.HasBlockRequest;
                    public static toObject(message: coop.rchain.casper.protocol.HasBlockRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IHasBlock {
                    hash?: (Uint8Array|null);
                }

                class HasBlock implements IHasBlock {
                    constructor(properties?: coop.rchain.casper.protocol.IHasBlock);
                    public hash: Uint8Array;
                    public static create(properties?: coop.rchain.casper.protocol.IHasBlock): coop.rchain.casper.protocol.HasBlock;
                    public static encode(message: coop.rchain.casper.protocol.IHasBlock, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IHasBlock, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.HasBlock;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.HasBlock;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.HasBlock;
                    public static toObject(message: coop.rchain.casper.protocol.HasBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IBlockRequest {
                    hash?: (Uint8Array|null);
                }

                class BlockRequest implements IBlockRequest {
                    constructor(properties?: coop.rchain.casper.protocol.IBlockRequest);
                    public hash: Uint8Array;
                    public static create(properties?: coop.rchain.casper.protocol.IBlockRequest): coop.rchain.casper.protocol.BlockRequest;
                    public static encode(message: coop.rchain.casper.protocol.IBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.BlockRequest;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.BlockRequest;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.BlockRequest;
                    public static toObject(message: coop.rchain.casper.protocol.BlockRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IForkChoiceTipRequest {
                }

                class ForkChoiceTipRequest implements IForkChoiceTipRequest {
                    constructor(properties?: coop.rchain.casper.protocol.IForkChoiceTipRequest);
                    public static create(properties?: coop.rchain.casper.protocol.IForkChoiceTipRequest): coop.rchain.casper.protocol.ForkChoiceTipRequest;
                    public static encode(message: coop.rchain.casper.protocol.IForkChoiceTipRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IForkChoiceTipRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.ForkChoiceTipRequest;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.ForkChoiceTipRequest;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.ForkChoiceTipRequest;
                    public static toObject(message: coop.rchain.casper.protocol.ForkChoiceTipRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IApprovedBlockCandidate {
                    block?: (coop.rchain.casper.protocol.IBlockMessage|null);
                    requiredSigs?: (number|null);
                }

                class ApprovedBlockCandidate implements IApprovedBlockCandidate {
                    constructor(properties?: coop.rchain.casper.protocol.IApprovedBlockCandidate);
                    public block?: (coop.rchain.casper.protocol.IBlockMessage|null);
                    public requiredSigs: number;
                    public static create(properties?: coop.rchain.casper.protocol.IApprovedBlockCandidate): coop.rchain.casper.protocol.ApprovedBlockCandidate;
                    public static encode(message: coop.rchain.casper.protocol.IApprovedBlockCandidate, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IApprovedBlockCandidate, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.ApprovedBlockCandidate;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.ApprovedBlockCandidate;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.ApprovedBlockCandidate;
                    public static toObject(message: coop.rchain.casper.protocol.ApprovedBlockCandidate, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IUnapprovedBlock {
                    candidate?: (coop.rchain.casper.protocol.IApprovedBlockCandidate|null);
                    timestamp?: (number|Long|null);
                    duration?: (number|Long|null);
                }

                class UnapprovedBlock implements IUnapprovedBlock {
                    constructor(properties?: coop.rchain.casper.protocol.IUnapprovedBlock);
                    public candidate?: (coop.rchain.casper.protocol.IApprovedBlockCandidate|null);
                    public timestamp: (number|Long);
                    public duration: (number|Long);
                    public static create(properties?: coop.rchain.casper.protocol.IUnapprovedBlock): coop.rchain.casper.protocol.UnapprovedBlock;
                    public static encode(message: coop.rchain.casper.protocol.IUnapprovedBlock, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IUnapprovedBlock, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.UnapprovedBlock;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.UnapprovedBlock;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.UnapprovedBlock;
                    public static toObject(message: coop.rchain.casper.protocol.UnapprovedBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ISignature {
                    publicKey?: (Uint8Array|null);
                    algorithm?: (string|null);
                    sig?: (Uint8Array|null);
                }

                class Signature implements ISignature {
                    constructor(properties?: coop.rchain.casper.protocol.ISignature);
                    public publicKey: Uint8Array;
                    public algorithm: string;
                    public sig: Uint8Array;
                    public static create(properties?: coop.rchain.casper.protocol.ISignature): coop.rchain.casper.protocol.Signature;
                    public static encode(message: coop.rchain.casper.protocol.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.Signature;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.Signature;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.Signature;
                    public static toObject(message: coop.rchain.casper.protocol.Signature, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IBlockApproval {
                    candidate?: (coop.rchain.casper.protocol.IApprovedBlockCandidate|null);
                    sig?: (coop.rchain.casper.protocol.ISignature|null);
                }

                class BlockApproval implements IBlockApproval {
                    constructor(properties?: coop.rchain.casper.protocol.IBlockApproval);
                    public candidate?: (coop.rchain.casper.protocol.IApprovedBlockCandidate|null);
                    public sig?: (coop.rchain.casper.protocol.ISignature|null);
                    public static create(properties?: coop.rchain.casper.protocol.IBlockApproval): coop.rchain.casper.protocol.BlockApproval;
                    public static encode(message: coop.rchain.casper.protocol.IBlockApproval, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IBlockApproval, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.BlockApproval;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.BlockApproval;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.BlockApproval;
                    public static toObject(message: coop.rchain.casper.protocol.BlockApproval, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IApprovedBlock {
                    candidate?: (coop.rchain.casper.protocol.IApprovedBlockCandidate|null);
                    sigs?: (coop.rchain.casper.protocol.ISignature[]|null);
                }

                class ApprovedBlock implements IApprovedBlock {
                    constructor(properties?: coop.rchain.casper.protocol.IApprovedBlock);
                    public candidate?: (coop.rchain.casper.protocol.IApprovedBlockCandidate|null);
                    public sigs: coop.rchain.casper.protocol.ISignature[];
                    public static create(properties?: coop.rchain.casper.protocol.IApprovedBlock): coop.rchain.casper.protocol.ApprovedBlock;
                    public static encode(message: coop.rchain.casper.protocol.IApprovedBlock, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IApprovedBlock, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.ApprovedBlock;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.ApprovedBlock;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.ApprovedBlock;
                    public static toObject(message: coop.rchain.casper.protocol.ApprovedBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IApprovedBlockRequest {
                    identifier?: (string|null);
                }

                class ApprovedBlockRequest implements IApprovedBlockRequest {
                    constructor(properties?: coop.rchain.casper.protocol.IApprovedBlockRequest);
                    public identifier: string;
                    public static create(properties?: coop.rchain.casper.protocol.IApprovedBlockRequest): coop.rchain.casper.protocol.ApprovedBlockRequest;
                    public static encode(message: coop.rchain.casper.protocol.IApprovedBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IApprovedBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.ApprovedBlockRequest;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.ApprovedBlockRequest;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.ApprovedBlockRequest;
                    public static toObject(message: coop.rchain.casper.protocol.ApprovedBlockRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface INoApprovedBlockAvailable {
                    identifier?: (string|null);
                    nodeIdentifer?: (string|null);
                }

                class NoApprovedBlockAvailable implements INoApprovedBlockAvailable {
                    constructor(properties?: coop.rchain.casper.protocol.INoApprovedBlockAvailable);
                    public identifier: string;
                    public nodeIdentifer: string;
                    public static create(properties?: coop.rchain.casper.protocol.INoApprovedBlockAvailable): coop.rchain.casper.protocol.NoApprovedBlockAvailable;
                    public static encode(message: coop.rchain.casper.protocol.INoApprovedBlockAvailable, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.INoApprovedBlockAvailable, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.NoApprovedBlockAvailable;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.NoApprovedBlockAvailable;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.NoApprovedBlockAvailable;
                    public static toObject(message: coop.rchain.casper.protocol.NoApprovedBlockAvailable, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IBlockMessage {
                    blockHash?: (Uint8Array|null);
                    header?: (coop.rchain.casper.protocol.IHeader|null);
                    body?: (coop.rchain.casper.protocol.IBody|null);
                    justifications?: (coop.rchain.casper.protocol.IJustification[]|null);
                    sender?: (Uint8Array|null);
                    seqNum?: (number|null);
                    sig?: (Uint8Array|null);
                    sigAlgorithm?: (string|null);
                    shardId?: (string|null);
                    extraBytes?: (Uint8Array|null);
                }

                class BlockMessage implements IBlockMessage {
                    constructor(properties?: coop.rchain.casper.protocol.IBlockMessage);
                    public blockHash: Uint8Array;
                    public header?: (coop.rchain.casper.protocol.IHeader|null);
                    public body?: (coop.rchain.casper.protocol.IBody|null);
                    public justifications: coop.rchain.casper.protocol.IJustification[];
                    public sender: Uint8Array;
                    public seqNum: number;
                    public sig: Uint8Array;
                    public sigAlgorithm: string;
                    public shardId: string;
                    public extraBytes: Uint8Array;
                    public static create(properties?: coop.rchain.casper.protocol.IBlockMessage): coop.rchain.casper.protocol.BlockMessage;
                    public static encode(message: coop.rchain.casper.protocol.IBlockMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IBlockMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.BlockMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.BlockMessage;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.BlockMessage;
                    public static toObject(message: coop.rchain.casper.protocol.BlockMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IBlockMetadataInternal {
                    blockHash?: (Uint8Array|null);
                    parents?: (Uint8Array[]|null);
                    sender?: (Uint8Array|null);
                    justifications?: (coop.rchain.casper.protocol.IJustification[]|null);
                    bonds?: (coop.rchain.casper.protocol.IBond[]|null);
                    blockNum?: (number|Long|null);
                    seqNum?: (number|null);
                    invalid?: (boolean|null);
                }

                class BlockMetadataInternal implements IBlockMetadataInternal {
                    constructor(properties?: coop.rchain.casper.protocol.IBlockMetadataInternal);
                    public blockHash: Uint8Array;
                    public parents: Uint8Array[];
                    public sender: Uint8Array;
                    public justifications: coop.rchain.casper.protocol.IJustification[];
                    public bonds: coop.rchain.casper.protocol.IBond[];
                    public blockNum: (number|Long);
                    public seqNum: number;
                    public invalid: boolean;
                    public static create(properties?: coop.rchain.casper.protocol.IBlockMetadataInternal): coop.rchain.casper.protocol.BlockMetadataInternal;
                    public static encode(message: coop.rchain.casper.protocol.IBlockMetadataInternal, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IBlockMetadataInternal, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.BlockMetadataInternal;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.BlockMetadataInternal;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.BlockMetadataInternal;
                    public static toObject(message: coop.rchain.casper.protocol.BlockMetadataInternal, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IHeader {
                    parentsHashList?: (Uint8Array[]|null);
                    postStateHash?: (Uint8Array|null);
                    deploysHash?: (Uint8Array|null);
                    timestamp?: (number|Long|null);
                    version?: (number|Long|null);
                    deployCount?: (number|null);
                    extraBytes?: (Uint8Array|null);
                }

                class Header implements IHeader {
                    constructor(properties?: coop.rchain.casper.protocol.IHeader);
                    public parentsHashList: Uint8Array[];
                    public postStateHash: Uint8Array;
                    public deploysHash: Uint8Array;
                    public timestamp: (number|Long);
                    public version: (number|Long);
                    public deployCount: number;
                    public extraBytes: Uint8Array;
                    public static create(properties?: coop.rchain.casper.protocol.IHeader): coop.rchain.casper.protocol.Header;
                    public static encode(message: coop.rchain.casper.protocol.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.Header;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.Header;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.Header;
                    public static toObject(message: coop.rchain.casper.protocol.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IDeployData {
                    deployer?: (Uint8Array|null);
                    term?: (string|null);
                    timestamp?: (number|Long|null);
                    sig?: (Uint8Array|null);
                    sigAlgorithm?: (string|null);
                    phloPrice?: (number|Long|null);
                    phloLimit?: (number|Long|null);
                    validAfterBlockNumber?: (number|Long|null);
                }

                class DeployData implements IDeployData {
                    constructor(properties?: coop.rchain.casper.protocol.IDeployData);
                    public deployer: Uint8Array;
                    public term: string;
                    public timestamp: (number|Long);
                    public sig: Uint8Array;
                    public sigAlgorithm: string;
                    public phloPrice: (number|Long);
                    public phloLimit: (number|Long);
                    public validAfterBlockNumber: (number|Long);
                    public static create(properties?: coop.rchain.casper.protocol.IDeployData): coop.rchain.casper.protocol.DeployData;
                    public static encode(message: coop.rchain.casper.protocol.IDeployData, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IDeployData, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.DeployData;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.DeployData;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.DeployData;
                    public static toObject(message: coop.rchain.casper.protocol.DeployData, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IProcessedDeploy {
                    deploy?: (coop.rchain.casper.protocol.IDeployData|null);
                    cost?: (IPCost|null);
                    deployLog?: (coop.rchain.casper.protocol.IEvent[]|null);
                    paymentLog?: (coop.rchain.casper.protocol.IEvent[]|null);
                    errored?: (boolean|null);
                }

                class ProcessedDeploy implements IProcessedDeploy {
                    constructor(properties?: coop.rchain.casper.protocol.IProcessedDeploy);
                    public deploy?: (coop.rchain.casper.protocol.IDeployData|null);
                    public cost?: (IPCost|null);
                    public deployLog: coop.rchain.casper.protocol.IEvent[];
                    public paymentLog: coop.rchain.casper.protocol.IEvent[];
                    public errored: boolean;
                    public static create(properties?: coop.rchain.casper.protocol.IProcessedDeploy): coop.rchain.casper.protocol.ProcessedDeploy;
                    public static encode(message: coop.rchain.casper.protocol.IProcessedDeploy, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IProcessedDeploy, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.ProcessedDeploy;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.ProcessedDeploy;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.ProcessedDeploy;
                    public static toObject(message: coop.rchain.casper.protocol.ProcessedDeploy, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IBody {
                    state?: (coop.rchain.casper.protocol.IRChainState|null);
                    deploys?: (coop.rchain.casper.protocol.IProcessedDeploy[]|null);
                    extraBytes?: (Uint8Array|null);
                }

                class Body implements IBody {
                    constructor(properties?: coop.rchain.casper.protocol.IBody);
                    public state?: (coop.rchain.casper.protocol.IRChainState|null);
                    public deploys: coop.rchain.casper.protocol.IProcessedDeploy[];
                    public extraBytes: Uint8Array;
                    public static create(properties?: coop.rchain.casper.protocol.IBody): coop.rchain.casper.protocol.Body;
                    public static encode(message: coop.rchain.casper.protocol.IBody, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IBody, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.Body;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.Body;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.Body;
                    public static toObject(message: coop.rchain.casper.protocol.Body, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IJustification {
                    validator?: (Uint8Array|null);
                    latestBlockHash?: (Uint8Array|null);
                }

                class Justification implements IJustification {
                    constructor(properties?: coop.rchain.casper.protocol.IJustification);
                    public validator: Uint8Array;
                    public latestBlockHash: Uint8Array;
                    public static create(properties?: coop.rchain.casper.protocol.IJustification): coop.rchain.casper.protocol.Justification;
                    public static encode(message: coop.rchain.casper.protocol.IJustification, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IJustification, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.Justification;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.Justification;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.Justification;
                    public static toObject(message: coop.rchain.casper.protocol.Justification, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IRChainState {
                    preStateHash?: (Uint8Array|null);
                    postStateHash?: (Uint8Array|null);
                    bonds?: (coop.rchain.casper.protocol.IBond[]|null);
                    blockNumber?: (number|Long|null);
                }

                class RChainState implements IRChainState {
                    constructor(properties?: coop.rchain.casper.protocol.IRChainState);
                    public preStateHash: Uint8Array;
                    public postStateHash: Uint8Array;
                    public bonds: coop.rchain.casper.protocol.IBond[];
                    public blockNumber: (number|Long);
                    public static create(properties?: coop.rchain.casper.protocol.IRChainState): coop.rchain.casper.protocol.RChainState;
                    public static encode(message: coop.rchain.casper.protocol.IRChainState, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IRChainState, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.RChainState;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.RChainState;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.RChainState;
                    public static toObject(message: coop.rchain.casper.protocol.RChainState, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IEvent {
                    produce?: (coop.rchain.casper.protocol.IProduceEvent|null);
                    consume?: (coop.rchain.casper.protocol.IConsumeEvent|null);
                    comm?: (coop.rchain.casper.protocol.ICommEvent|null);
                }

                class Event implements IEvent {
                    constructor(properties?: coop.rchain.casper.protocol.IEvent);
                    public produce?: (coop.rchain.casper.protocol.IProduceEvent|null);
                    public consume?: (coop.rchain.casper.protocol.IConsumeEvent|null);
                    public comm?: (coop.rchain.casper.protocol.ICommEvent|null);
                    public event_instance?: ("produce"|"consume"|"comm");
                    public static create(properties?: coop.rchain.casper.protocol.IEvent): coop.rchain.casper.protocol.Event;
                    public static encode(message: coop.rchain.casper.protocol.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.Event;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.Event;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.Event;
                    public static toObject(message: coop.rchain.casper.protocol.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IProduceEvent {
                    channelsHash?: (Uint8Array|null);
                    hash?: (Uint8Array|null);
                    persistent?: (boolean|null);
                    sequenceNumber?: (number|null);
                }

                class ProduceEvent implements IProduceEvent {
                    constructor(properties?: coop.rchain.casper.protocol.IProduceEvent);
                    public channelsHash: Uint8Array;
                    public hash: Uint8Array;
                    public persistent: boolean;
                    public sequenceNumber: number;
                    public static create(properties?: coop.rchain.casper.protocol.IProduceEvent): coop.rchain.casper.protocol.ProduceEvent;
                    public static encode(message: coop.rchain.casper.protocol.IProduceEvent, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IProduceEvent, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.ProduceEvent;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.ProduceEvent;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.ProduceEvent;
                    public static toObject(message: coop.rchain.casper.protocol.ProduceEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IConsumeEvent {
                    channelsHashes?: (Uint8Array[]|null);
                    hash?: (Uint8Array|null);
                    persistent?: (boolean|null);
                    sequenceNumber?: (number|null);
                }

                class ConsumeEvent implements IConsumeEvent {
                    constructor(properties?: coop.rchain.casper.protocol.IConsumeEvent);
                    public channelsHashes: Uint8Array[];
                    public hash: Uint8Array;
                    public persistent: boolean;
                    public sequenceNumber: number;
                    public static create(properties?: coop.rchain.casper.protocol.IConsumeEvent): coop.rchain.casper.protocol.ConsumeEvent;
                    public static encode(message: coop.rchain.casper.protocol.IConsumeEvent, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IConsumeEvent, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.ConsumeEvent;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.ConsumeEvent;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.ConsumeEvent;
                    public static toObject(message: coop.rchain.casper.protocol.ConsumeEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ICommEvent {
                    consume?: (coop.rchain.casper.protocol.IConsumeEvent|null);
                    produces?: (coop.rchain.casper.protocol.IProduceEvent[]|null);
                }

                class CommEvent implements ICommEvent {
                    constructor(properties?: coop.rchain.casper.protocol.ICommEvent);
                    public consume?: (coop.rchain.casper.protocol.IConsumeEvent|null);
                    public produces: coop.rchain.casper.protocol.IProduceEvent[];
                    public static create(properties?: coop.rchain.casper.protocol.ICommEvent): coop.rchain.casper.protocol.CommEvent;
                    public static encode(message: coop.rchain.casper.protocol.ICommEvent, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.ICommEvent, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.CommEvent;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.CommEvent;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.CommEvent;
                    public static toObject(message: coop.rchain.casper.protocol.CommEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IBond {
                    validator?: (Uint8Array|null);
                    stake?: (number|Long|null);
                }

                class Bond implements IBond {
                    constructor(properties?: coop.rchain.casper.protocol.IBond);
                    public validator: Uint8Array;
                    public stake: (number|Long);
                    public static create(properties?: coop.rchain.casper.protocol.IBond): coop.rchain.casper.protocol.Bond;
                    public static encode(message: coop.rchain.casper.protocol.IBond, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: coop.rchain.casper.protocol.IBond, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coop.rchain.casper.protocol.Bond;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coop.rchain.casper.protocol.Bond;
                    public static verify(message: { [k: string]: any }): (string|null);
                    public static fromObject(object: { [k: string]: any }): coop.rchain.casper.protocol.Bond;
                    public static toObject(message: coop.rchain.casper.protocol.Bond, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}

export namespace scalapb {

    interface IScalaPbOptions {
        package_name?: (string|null);
        flat_package?: (boolean|null);
        "import"?: (string[]|null);
        preamble?: (string[]|null);
        single_file?: (boolean|null);
        no_primitive_wrappers?: (boolean|null);
        primitive_wrappers?: (boolean|null);
        collection_type?: (string|null);
        preserve_unknown_fields?: (boolean|null);
        object_name?: (string|null);
        scope?: (scalapb.ScalaPbOptions.OptionsScope|null);
        lenses?: (boolean|null);
        retain_source_code_info?: (boolean|null);
        map_type?: (string|null);
        test_only_no_java_conversions?: (boolean|null);
    }

    class ScalaPbOptions implements IScalaPbOptions {
        constructor(properties?: scalapb.IScalaPbOptions);
        public package_name: string;
        public flat_package: boolean;
        public import: string[];
        public preamble: string[];
        public single_file: boolean;
        public no_primitive_wrappers: boolean;
        public primitive_wrappers: boolean;
        public collection_type: string;
        public preserve_unknown_fields: boolean;
        public object_name: string;
        public scope: scalapb.ScalaPbOptions.OptionsScope;
        public lenses: boolean;
        public retain_source_code_info: boolean;
        public map_type: string;
        public test_only_no_java_conversions: boolean;
        public static create(properties?: scalapb.IScalaPbOptions): scalapb.ScalaPbOptions;
        public static encode(message: scalapb.IScalaPbOptions, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: scalapb.IScalaPbOptions, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scalapb.ScalaPbOptions;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scalapb.ScalaPbOptions;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): scalapb.ScalaPbOptions;
        public static toObject(message: scalapb.ScalaPbOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    namespace ScalaPbOptions {

        enum OptionsScope {
            FILE = 0,
            PACKAGE = 1
        }
    }

    interface IMessageOptions {
        "extends"?: (string[]|null);
        companion_extends?: (string[]|null);
        annotations?: (string[]|null);
        type?: (string|null);
        companion_annotations?: (string[]|null);
        sealed_oneof_extends?: (string[]|null);
    }

    class MessageOptions implements IMessageOptions {
        constructor(properties?: scalapb.IMessageOptions);
        public extends: string[];
        public companion_extends: string[];
        public annotations: string[];
        public type: string;
        public companion_annotations: string[];
        public sealed_oneof_extends: string[];
        public static create(properties?: scalapb.IMessageOptions): scalapb.MessageOptions;
        public static encode(message: scalapb.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: scalapb.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scalapb.MessageOptions;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scalapb.MessageOptions;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): scalapb.MessageOptions;
        public static toObject(message: scalapb.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IFieldOptions {
        type?: (string|null);
        scala_name?: (string|null);
        collection_type?: (string|null);
        key_type?: (string|null);
        value_type?: (string|null);
        annotations?: (string[]|null);
        map_type?: (string|null);
        no_box?: (boolean|null);
    }

    class FieldOptions implements IFieldOptions {
        constructor(properties?: scalapb.IFieldOptions);
        public type: string;
        public scala_name: string;
        public collection_type: string;
        public key_type: string;
        public value_type: string;
        public annotations: string[];
        public map_type: string;
        public no_box: boolean;
        public static create(properties?: scalapb.IFieldOptions): scalapb.FieldOptions;
        public static encode(message: scalapb.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: scalapb.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scalapb.FieldOptions;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scalapb.FieldOptions;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): scalapb.FieldOptions;
        public static toObject(message: scalapb.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IEnumOptions {
        "extends"?: (string[]|null);
        companion_extends?: (string[]|null);
        type?: (string|null);
    }

    class EnumOptions implements IEnumOptions {
        constructor(properties?: scalapb.IEnumOptions);
        public extends: string[];
        public companion_extends: string[];
        public type: string;
        public static create(properties?: scalapb.IEnumOptions): scalapb.EnumOptions;
        public static encode(message: scalapb.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: scalapb.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scalapb.EnumOptions;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scalapb.EnumOptions;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): scalapb.EnumOptions;
        public static toObject(message: scalapb.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IEnumValueOptions {
        "extends"?: (string[]|null);
    }

    class EnumValueOptions implements IEnumValueOptions {
        constructor(properties?: scalapb.IEnumValueOptions);
        public extends: string[];
        public static create(properties?: scalapb.IEnumValueOptions): scalapb.EnumValueOptions;
        public static encode(message: scalapb.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: scalapb.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scalapb.EnumValueOptions;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scalapb.EnumValueOptions;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): scalapb.EnumValueOptions;
        public static toObject(message: scalapb.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IOneofOptions {
        "extends"?: (string[]|null);
    }

    class OneofOptions implements IOneofOptions {
        constructor(properties?: scalapb.IOneofOptions);
        public extends: string[];
        public static create(properties?: scalapb.IOneofOptions): scalapb.OneofOptions;
        public static encode(message: scalapb.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: scalapb.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scalapb.OneofOptions;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scalapb.OneofOptions;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): scalapb.OneofOptions;
        public static toObject(message: scalapb.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }
}

export interface IPar {
    sends?: (ISend[]|null);
    receives?: (IReceive[]|null);
    news?: (INew[]|null);
    exprs?: (IExpr[]|null);
    matches?: (IMatch[]|null);
    unforgeables?: (IGUnforgeable[]|null);
    bundles?: (IBundle[]|null);
    connectives?: (IConnective[]|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
}

export class Par implements IPar {
    constructor(properties?: IPar);
    public sends: ISend[];
    public receives: IReceive[];
    public news: INew[];
    public exprs: IExpr[];
    public matches: IMatch[];
    public unforgeables: IGUnforgeable[];
    public bundles: IBundle[];
    public connectives: IConnective[];
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public static create(properties?: IPar): Par;
    public static encode(message: IPar, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPar, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Par;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Par;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Par;
    public static toObject(message: Par, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ITaggedContinuation {
    par_body?: (IParWithRandom|null);
    scala_body_ref?: (number|Long|null);
}

export class TaggedContinuation implements ITaggedContinuation {
    constructor(properties?: ITaggedContinuation);
    public par_body?: (IParWithRandom|null);
    public scala_body_ref: (number|Long);
    public tagged_cont?: ("par_body"|"scala_body_ref");
    public static create(properties?: ITaggedContinuation): TaggedContinuation;
    public static encode(message: ITaggedContinuation, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ITaggedContinuation, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TaggedContinuation;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TaggedContinuation;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): TaggedContinuation;
    public static toObject(message: TaggedContinuation, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IParWithRandom {
    body?: (IPar|null);
    randomState?: (Uint8Array|null);
}

export class ParWithRandom implements IParWithRandom {
    constructor(properties?: IParWithRandom);
    public body?: (IPar|null);
    public randomState: Uint8Array;
    public static create(properties?: IParWithRandom): ParWithRandom;
    public static encode(message: IParWithRandom, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IParWithRandom, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ParWithRandom;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ParWithRandom;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ParWithRandom;
    public static toObject(message: ParWithRandom, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IPCost {
    cost?: (number|Long|null);
}

export class PCost implements IPCost {
    constructor(properties?: IPCost);
    public cost: (number|Long);
    public static create(properties?: IPCost): PCost;
    public static encode(message: IPCost, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPCost, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PCost;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PCost;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): PCost;
    public static toObject(message: PCost, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IListParWithRandom {
    pars?: (IPar[]|null);
    randomState?: (Uint8Array|null);
}

export class ListParWithRandom implements IListParWithRandom {
    constructor(properties?: IListParWithRandom);
    public pars: IPar[];
    public randomState: Uint8Array;
    public static create(properties?: IListParWithRandom): ListParWithRandom;
    public static encode(message: IListParWithRandom, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IListParWithRandom, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListParWithRandom;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListParWithRandom;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ListParWithRandom;
    public static toObject(message: ListParWithRandom, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IVar {
    bound_var?: (number|null);
    free_var?: (number|null);
    wildcard?: (Var.IWildcardMsg|null);
}

export class Var implements IVar {
    constructor(properties?: IVar);
    public bound_var: number;
    public free_var: number;
    public wildcard?: (Var.IWildcardMsg|null);
    public var_instance?: ("bound_var"|"free_var"|"wildcard");
    public static create(properties?: IVar): Var;
    public static encode(message: IVar, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IVar, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Var;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Var;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Var;
    public static toObject(message: Var, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export namespace Var {

    interface IWildcardMsg {
    }

    class WildcardMsg implements IWildcardMsg {
        constructor(properties?: Var.IWildcardMsg);
        public static create(properties?: Var.IWildcardMsg): Var.WildcardMsg;
        public static encode(message: Var.IWildcardMsg, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: Var.IWildcardMsg, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Var.WildcardMsg;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Var.WildcardMsg;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): Var.WildcardMsg;
        public static toObject(message: Var.WildcardMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }
}

export interface IBundle {
    body?: (IPar|null);
    writeFlag?: (boolean|null);
    readFlag?: (boolean|null);
}

export class Bundle implements IBundle {
    constructor(properties?: IBundle);
    public body?: (IPar|null);
    public writeFlag: boolean;
    public readFlag: boolean;
    public static create(properties?: IBundle): Bundle;
    public static encode(message: IBundle, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IBundle, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bundle;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Bundle;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Bundle;
    public static toObject(message: Bundle, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ISend {
    chan?: (IPar|null);
    data?: (IPar[]|null);
    persistent?: (boolean|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
}

export class Send implements ISend {
    constructor(properties?: ISend);
    public chan?: (IPar|null);
    public data: IPar[];
    public persistent: boolean;
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public static create(properties?: ISend): Send;
    public static encode(message: ISend, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ISend, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Send;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Send;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Send;
    public static toObject(message: Send, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IReceiveBind {
    patterns?: (IPar[]|null);
    source?: (IPar|null);
    remainder?: (IVar|null);
    freeCount?: (number|null);
}

export class ReceiveBind implements IReceiveBind {
    constructor(properties?: IReceiveBind);
    public patterns: IPar[];
    public source?: (IPar|null);
    public remainder?: (IVar|null);
    public freeCount: number;
    public static create(properties?: IReceiveBind): ReceiveBind;
    public static encode(message: IReceiveBind, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IReceiveBind, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReceiveBind;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReceiveBind;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ReceiveBind;
    public static toObject(message: ReceiveBind, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IBindPattern {
    patterns?: (IPar[]|null);
    remainder?: (IVar|null);
    freeCount?: (number|null);
}

export class BindPattern implements IBindPattern {
    constructor(properties?: IBindPattern);
    public patterns: IPar[];
    public remainder?: (IVar|null);
    public freeCount: number;
    public static create(properties?: IBindPattern): BindPattern;
    public static encode(message: IBindPattern, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IBindPattern, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BindPattern;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BindPattern;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): BindPattern;
    public static toObject(message: BindPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IListBindPatterns {
    patterns?: (IBindPattern[]|null);
}

export class ListBindPatterns implements IListBindPatterns {
    constructor(properties?: IListBindPatterns);
    public patterns: IBindPattern[];
    public static create(properties?: IListBindPatterns): ListBindPatterns;
    public static encode(message: IListBindPatterns, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IListBindPatterns, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListBindPatterns;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListBindPatterns;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ListBindPatterns;
    public static toObject(message: ListBindPatterns, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IReceive {
    binds?: (IReceiveBind[]|null);
    body?: (IPar|null);
    persistent?: (boolean|null);
    peek?: (boolean|null);
    bindCount?: (number|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
}

export class Receive implements IReceive {
    constructor(properties?: IReceive);
    public binds: IReceiveBind[];
    public body?: (IPar|null);
    public persistent: boolean;
    public peek: boolean;
    public bindCount: number;
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public static create(properties?: IReceive): Receive;
    public static encode(message: IReceive, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IReceive, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Receive;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Receive;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Receive;
    public static toObject(message: Receive, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface INew {
    bindCount?: (number|null);
    p?: (IPar|null);
    uri?: (string[]|null);
    deployId?: (IDeployId|null);
    deployerId?: (IDeployerId|null);
    locallyFree?: (Uint8Array|null);
}

export class New implements INew {
    constructor(properties?: INew);
    public bindCount: number;
    public p?: (IPar|null);
    public uri: string[];
    public deployId?: (IDeployId|null);
    public deployerId?: (IDeployerId|null);
    public locallyFree: Uint8Array;
    public static create(properties?: INew): New;
    public static encode(message: INew, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: INew, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): New;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): New;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): New;
    public static toObject(message: New, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IMatchCase {
    pattern?: (IPar|null);
    source?: (IPar|null);
    freeCount?: (number|null);
}

export class MatchCase implements IMatchCase {
    constructor(properties?: IMatchCase);
    public pattern?: (IPar|null);
    public source?: (IPar|null);
    public freeCount: number;
    public static create(properties?: IMatchCase): MatchCase;
    public static encode(message: IMatchCase, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IMatchCase, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchCase;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MatchCase;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): MatchCase;
    public static toObject(message: MatchCase, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IMatch {
    target?: (IPar|null);
    cases?: (IMatchCase[]|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
}

export class Match implements IMatch {
    constructor(properties?: IMatch);
    public target?: (IPar|null);
    public cases: IMatchCase[];
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public static create(properties?: IMatch): Match;
    public static encode(message: IMatch, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IMatch, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Match;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Match;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Match;
    public static toObject(message: Match, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IExpr {
    g_bool?: (boolean|null);
    g_int?: (number|Long|null);
    g_string?: (string|null);
    g_uri?: (string|null);
    g_byte_array?: (Uint8Array|null);
    e_not_body?: (IENot|null);
    e_neg_body?: (IENeg|null);
    e_mult_body?: (IEMult|null);
    e_div_body?: (IEDiv|null);
    e_plus_body?: (IEPlus|null);
    e_minus_body?: (IEMinus|null);
    e_lt_body?: (IELt|null);
    e_lte_body?: (IELte|null);
    e_gt_body?: (IEGt|null);
    e_gte_body?: (IEGte|null);
    e_eq_body?: (IEEq|null);
    e_neq_body?: (IENeq|null);
    e_and_body?: (IEAnd|null);
    e_or_body?: (IEOr|null);
    e_var_body?: (IEVar|null);
    e_list_body?: (IEList|null);
    e_tuple_body?: (IETuple|null);
    e_set_body?: (IESet|null);
    e_map_body?: (IEMap|null);
    e_method_body?: (IEMethod|null);
    e_matches_body?: (IEMatches|null);
    e_percent_percent_body?: (IEPercentPercent|null);
    e_plus_plus_body?: (IEPlusPlus|null);
    e_minus_minus_body?: (IEMinusMinus|null);
    e_mod_body?: (IEMod|null);
}

export class Expr implements IExpr {
    constructor(properties?: IExpr);
    public g_bool: boolean;
    public g_int: (number|Long);
    public g_string: string;
    public g_uri: string;
    public g_byte_array: Uint8Array;
    public e_not_body?: (IENot|null);
    public e_neg_body?: (IENeg|null);
    public e_mult_body?: (IEMult|null);
    public e_div_body?: (IEDiv|null);
    public e_plus_body?: (IEPlus|null);
    public e_minus_body?: (IEMinus|null);
    public e_lt_body?: (IELt|null);
    public e_lte_body?: (IELte|null);
    public e_gt_body?: (IEGt|null);
    public e_gte_body?: (IEGte|null);
    public e_eq_body?: (IEEq|null);
    public e_neq_body?: (IENeq|null);
    public e_and_body?: (IEAnd|null);
    public e_or_body?: (IEOr|null);
    public e_var_body?: (IEVar|null);
    public e_list_body?: (IEList|null);
    public e_tuple_body?: (IETuple|null);
    public e_set_body?: (IESet|null);
    public e_map_body?: (IEMap|null);
    public e_method_body?: (IEMethod|null);
    public e_matches_body?: (IEMatches|null);
    public e_percent_percent_body?: (IEPercentPercent|null);
    public e_plus_plus_body?: (IEPlusPlus|null);
    public e_minus_minus_body?: (IEMinusMinus|null);
    public e_mod_body?: (IEMod|null);
    public expr_instance?: ("g_bool"|"g_int"|"g_string"|"g_uri"|"g_byte_array"|"e_not_body"|"e_neg_body"|"e_mult_body"|"e_div_body"|"e_plus_body"|"e_minus_body"|"e_lt_body"|"e_lte_body"|"e_gt_body"|"e_gte_body"|"e_eq_body"|"e_neq_body"|"e_and_body"|"e_or_body"|"e_var_body"|"e_list_body"|"e_tuple_body"|"e_set_body"|"e_map_body"|"e_method_body"|"e_matches_body"|"e_percent_percent_body"|"e_plus_plus_body"|"e_minus_minus_body"|"e_mod_body");
    public static create(properties?: IExpr): Expr;
    public static encode(message: IExpr, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IExpr, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Expr;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Expr;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Expr;
    public static toObject(message: Expr, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEList {
    ps?: (IPar[]|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
    remainder?: (IVar|null);
}

export class EList implements IEList {
    constructor(properties?: IEList);
    public ps: IPar[];
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public remainder?: (IVar|null);
    public static create(properties?: IEList): EList;
    public static encode(message: IEList, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEList, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EList;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EList;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EList;
    public static toObject(message: EList, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IETuple {
    ps?: (IPar[]|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
}

export class ETuple implements IETuple {
    constructor(properties?: IETuple);
    public ps: IPar[];
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public static create(properties?: IETuple): ETuple;
    public static encode(message: IETuple, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IETuple, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ETuple;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ETuple;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ETuple;
    public static toObject(message: ETuple, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IESet {
    ps?: (IPar[]|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
    remainder?: (IVar|null);
}

export class ESet implements IESet {
    constructor(properties?: IESet);
    public ps: IPar[];
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public remainder?: (IVar|null);
    public static create(properties?: IESet): ESet;
    public static encode(message: IESet, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IESet, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ESet;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ESet;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ESet;
    public static toObject(message: ESet, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEMap {
    kvs?: (IKeyValuePair[]|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
    remainder?: (IVar|null);
}

export class EMap implements IEMap {
    constructor(properties?: IEMap);
    public kvs: IKeyValuePair[];
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public remainder?: (IVar|null);
    public static create(properties?: IEMap): EMap;
    public static encode(message: IEMap, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEMap, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMap;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMap;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EMap;
    public static toObject(message: EMap, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEMethod {
    methodName?: (string|null);
    target?: (IPar|null);
    "arguments"?: (IPar[]|null);
    locallyFree?: (Uint8Array|null);
    connective_used?: (boolean|null);
}

export class EMethod implements IEMethod {
    constructor(properties?: IEMethod);
    public methodName: string;
    public target?: (IPar|null);
    public arguments: IPar[];
    public locallyFree: Uint8Array;
    public connective_used: boolean;
    public static create(properties?: IEMethod): EMethod;
    public static encode(message: IEMethod, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEMethod, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMethod;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMethod;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EMethod;
    public static toObject(message: EMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IKeyValuePair {
    key?: (IPar|null);
    value?: (IPar|null);
}

export class KeyValuePair implements IKeyValuePair {
    constructor(properties?: IKeyValuePair);
    public key?: (IPar|null);
    public value?: (IPar|null);
    public static create(properties?: IKeyValuePair): KeyValuePair;
    public static encode(message: IKeyValuePair, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IKeyValuePair, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): KeyValuePair;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): KeyValuePair;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): KeyValuePair;
    public static toObject(message: KeyValuePair, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEVar {
    v?: (IVar|null);
}

export class EVar implements IEVar {
    constructor(properties?: IEVar);
    public v?: (IVar|null);
    public static create(properties?: IEVar): EVar;
    public static encode(message: IEVar, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEVar, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EVar;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EVar;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EVar;
    public static toObject(message: EVar, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IENot {
    p?: (IPar|null);
}

export class ENot implements IENot {
    constructor(properties?: IENot);
    public p?: (IPar|null);
    public static create(properties?: IENot): ENot;
    public static encode(message: IENot, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IENot, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ENot;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ENot;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ENot;
    public static toObject(message: ENot, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IENeg {
    p?: (IPar|null);
}

export class ENeg implements IENeg {
    constructor(properties?: IENeg);
    public p?: (IPar|null);
    public static create(properties?: IENeg): ENeg;
    public static encode(message: IENeg, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IENeg, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ENeg;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ENeg;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ENeg;
    public static toObject(message: ENeg, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEMult {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EMult implements IEMult {
    constructor(properties?: IEMult);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEMult): EMult;
    public static encode(message: IEMult, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEMult, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMult;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMult;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EMult;
    public static toObject(message: EMult, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEDiv {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EDiv implements IEDiv {
    constructor(properties?: IEDiv);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEDiv): EDiv;
    public static encode(message: IEDiv, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEDiv, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EDiv;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EDiv;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EDiv;
    public static toObject(message: EDiv, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEMod {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EMod implements IEMod {
    constructor(properties?: IEMod);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEMod): EMod;
    public static encode(message: IEMod, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEMod, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMod;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMod;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EMod;
    public static toObject(message: EMod, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEPlus {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EPlus implements IEPlus {
    constructor(properties?: IEPlus);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEPlus): EPlus;
    public static encode(message: IEPlus, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEPlus, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EPlus;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EPlus;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EPlus;
    public static toObject(message: EPlus, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEMinus {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EMinus implements IEMinus {
    constructor(properties?: IEMinus);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEMinus): EMinus;
    public static encode(message: IEMinus, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEMinus, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMinus;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMinus;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EMinus;
    public static toObject(message: EMinus, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IELt {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class ELt implements IELt {
    constructor(properties?: IELt);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IELt): ELt;
    public static encode(message: IELt, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IELt, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ELt;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ELt;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ELt;
    public static toObject(message: ELt, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IELte {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class ELte implements IELte {
    constructor(properties?: IELte);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IELte): ELte;
    public static encode(message: IELte, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IELte, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ELte;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ELte;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ELte;
    public static toObject(message: ELte, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEGt {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EGt implements IEGt {
    constructor(properties?: IEGt);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEGt): EGt;
    public static encode(message: IEGt, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEGt, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EGt;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EGt;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EGt;
    public static toObject(message: EGt, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEGte {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EGte implements IEGte {
    constructor(properties?: IEGte);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEGte): EGte;
    public static encode(message: IEGte, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEGte, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EGte;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EGte;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EGte;
    public static toObject(message: EGte, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEEq {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EEq implements IEEq {
    constructor(properties?: IEEq);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEEq): EEq;
    public static encode(message: IEEq, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEEq, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EEq;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EEq;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EEq;
    public static toObject(message: EEq, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IENeq {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class ENeq implements IENeq {
    constructor(properties?: IENeq);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IENeq): ENeq;
    public static encode(message: IENeq, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IENeq, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ENeq;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ENeq;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ENeq;
    public static toObject(message: ENeq, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEAnd {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EAnd implements IEAnd {
    constructor(properties?: IEAnd);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEAnd): EAnd;
    public static encode(message: IEAnd, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEAnd, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EAnd;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EAnd;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EAnd;
    public static toObject(message: EAnd, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEOr {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EOr implements IEOr {
    constructor(properties?: IEOr);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEOr): EOr;
    public static encode(message: IEOr, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEOr, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EOr;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EOr;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EOr;
    public static toObject(message: EOr, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEMatches {
    target?: (IPar|null);
    pattern?: (IPar|null);
}

export class EMatches implements IEMatches {
    constructor(properties?: IEMatches);
    public target?: (IPar|null);
    public pattern?: (IPar|null);
    public static create(properties?: IEMatches): EMatches;
    public static encode(message: IEMatches, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEMatches, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMatches;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMatches;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EMatches;
    public static toObject(message: EMatches, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEPercentPercent {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EPercentPercent implements IEPercentPercent {
    constructor(properties?: IEPercentPercent);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEPercentPercent): EPercentPercent;
    public static encode(message: IEPercentPercent, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEPercentPercent, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EPercentPercent;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EPercentPercent;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EPercentPercent;
    public static toObject(message: EPercentPercent, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEPlusPlus {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EPlusPlus implements IEPlusPlus {
    constructor(properties?: IEPlusPlus);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEPlusPlus): EPlusPlus;
    public static encode(message: IEPlusPlus, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEPlusPlus, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EPlusPlus;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EPlusPlus;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EPlusPlus;
    public static toObject(message: EPlusPlus, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEMinusMinus {
    p1?: (IPar|null);
    p2?: (IPar|null);
}

export class EMinusMinus implements IEMinusMinus {
    constructor(properties?: IEMinusMinus);
    public p1?: (IPar|null);
    public p2?: (IPar|null);
    public static create(properties?: IEMinusMinus): EMinusMinus;
    public static encode(message: IEMinusMinus, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEMinusMinus, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EMinusMinus;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EMinusMinus;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EMinusMinus;
    public static toObject(message: EMinusMinus, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IConnective {
    conn_and_body?: (IConnectiveBody|null);
    conn_or_body?: (IConnectiveBody|null);
    conn_not_body?: (IPar|null);
    var_ref_body?: (IVarRef|null);
    conn_bool?: (boolean|null);
    conn_int?: (boolean|null);
    conn_string?: (boolean|null);
    conn_uri?: (boolean|null);
    conn_byte_array?: (boolean|null);
}

export class Connective implements IConnective {
    constructor(properties?: IConnective);
    public conn_and_body?: (IConnectiveBody|null);
    public conn_or_body?: (IConnectiveBody|null);
    public conn_not_body?: (IPar|null);
    public var_ref_body?: (IVarRef|null);
    public conn_bool: boolean;
    public conn_int: boolean;
    public conn_string: boolean;
    public conn_uri: boolean;
    public conn_byte_array: boolean;
    public connective_instance?: ("conn_and_body"|"conn_or_body"|"conn_not_body"|"var_ref_body"|"conn_bool"|"conn_int"|"conn_string"|"conn_uri"|"conn_byte_array");
    public static create(properties?: IConnective): Connective;
    public static encode(message: IConnective, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IConnective, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Connective;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Connective;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Connective;
    public static toObject(message: Connective, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IVarRef {
    index?: (number|null);
    depth?: (number|null);
}

export class VarRef implements IVarRef {
    constructor(properties?: IVarRef);
    public index: number;
    public depth: number;
    public static create(properties?: IVarRef): VarRef;
    public static encode(message: IVarRef, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IVarRef, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VarRef;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VarRef;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): VarRef;
    public static toObject(message: VarRef, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IConnectiveBody {
    ps?: (IPar[]|null);
}

export class ConnectiveBody implements IConnectiveBody {
    constructor(properties?: IConnectiveBody);
    public ps: IPar[];
    public static create(properties?: IConnectiveBody): ConnectiveBody;
    public static encode(message: IConnectiveBody, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IConnectiveBody, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConnectiveBody;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConnectiveBody;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ConnectiveBody;
    public static toObject(message: ConnectiveBody, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IDeployId {
    sig?: (Uint8Array|null);
}

export class DeployId implements IDeployId {
    constructor(properties?: IDeployId);
    public sig: Uint8Array;
    public static create(properties?: IDeployId): DeployId;
    public static encode(message: IDeployId, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IDeployId, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeployId;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeployId;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): DeployId;
    public static toObject(message: DeployId, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IDeployerId {
    publicKey?: (Uint8Array|null);
}

export class DeployerId implements IDeployerId {
    constructor(properties?: IDeployerId);
    public publicKey: Uint8Array;
    public static create(properties?: IDeployerId): DeployerId;
    public static encode(message: IDeployerId, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IDeployerId, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeployerId;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeployerId;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): DeployerId;
    public static toObject(message: DeployerId, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IGUnforgeable {
    g_private_body?: (IGPrivate|null);
    g_deploy_id_body?: (IGDeployId|null);
    g_deployer_id_body?: (IGDeployerId|null);
}

export class GUnforgeable implements IGUnforgeable {
    constructor(properties?: IGUnforgeable);
    public g_private_body?: (IGPrivate|null);
    public g_deploy_id_body?: (IGDeployId|null);
    public g_deployer_id_body?: (IGDeployerId|null);
    public unf_instance?: ("g_private_body"|"g_deploy_id_body"|"g_deployer_id_body");
    public static create(properties?: IGUnforgeable): GUnforgeable;
    public static encode(message: IGUnforgeable, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IGUnforgeable, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GUnforgeable;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GUnforgeable;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): GUnforgeable;
    public static toObject(message: GUnforgeable, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IGPrivate {
    id?: (Uint8Array|null);
}

export class GPrivate implements IGPrivate {
    constructor(properties?: IGPrivate);
    public id: Uint8Array;
    public static create(properties?: IGPrivate): GPrivate;
    public static encode(message: IGPrivate, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IGPrivate, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GPrivate;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GPrivate;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): GPrivate;
    public static toObject(message: GPrivate, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IGDeployId {
    sig?: (Uint8Array|null);
}

export class GDeployId implements IGDeployId {
    constructor(properties?: IGDeployId);
    public sig: Uint8Array;
    public static create(properties?: IGDeployId): GDeployId;
    public static encode(message: IGDeployId, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IGDeployId, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GDeployId;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GDeployId;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): GDeployId;
    public static toObject(message: GDeployId, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IGDeployerId {
    publicKey?: (Uint8Array|null);
}

export class GDeployerId implements IGDeployerId {
    constructor(properties?: IGDeployerId);
    public publicKey: Uint8Array;
    public static create(properties?: IGDeployerId): GDeployerId;
    public static encode(message: IGDeployerId, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IGDeployerId, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GDeployerId;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GDeployerId;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): GDeployerId;
    public static toObject(message: GDeployerId, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEitherAny {
    type_url?: (string|null);
    value?: (Uint8Array|null);
}

export class EitherAny implements IEitherAny {
    constructor(properties?: IEitherAny);
    public type_url: string;
    public value: Uint8Array;
    public static create(properties?: IEitherAny): EitherAny;
    public static encode(message: IEitherAny, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEitherAny, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EitherAny;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EitherAny;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EitherAny;
    public static toObject(message: EitherAny, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEitherError {
    messages?: (string[]|null);
}

export class EitherError implements IEitherError {
    constructor(properties?: IEitherError);
    public messages: string[];
    public static create(properties?: IEitherError): EitherError;
    public static encode(message: IEitherError, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEitherError, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EitherError;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EitherError;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EitherError;
    public static toObject(message: EitherError, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEitherSuccess {
    response?: (IEitherAny|null);
}

export class EitherSuccess implements IEitherSuccess {
    constructor(properties?: IEitherSuccess);
    public response?: (IEitherAny|null);
    public static create(properties?: IEitherSuccess): EitherSuccess;
    public static encode(message: IEitherSuccess, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEitherSuccess, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EitherSuccess;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EitherSuccess;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EitherSuccess;
    public static toObject(message: EitherSuccess, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEither {
    error?: (IEitherError|null);
    success?: (IEitherSuccess|null);
}

export class Either implements IEither {
    constructor(properties?: IEither);
    public error?: (IEitherError|null);
    public success?: (IEitherSuccess|null);
    public content?: ("error"|"success");
    public static create(properties?: IEither): Either;
    public static encode(message: IEither, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEither, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Either;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Either;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Either;
    public static toObject(message: Either, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export namespace google {

    namespace protobuf {

        interface IEmpty {
        }

        class Empty implements IEmpty {
            constructor(properties?: google.protobuf.IEmpty);
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IFileDescriptorSet {
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        class FileDescriptorSet implements IFileDescriptorSet {
            constructor(properties?: google.protobuf.IFileDescriptorSet);
            public file: google.protobuf.IFileDescriptorProto[];
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IFileDescriptorProto {
            name?: (string|null);
            "package"?: (string|null);
            dependency?: (string[]|null);
            public_dependency?: (number[]|null);
            weak_dependency?: (number[]|null);
            message_type?: (google.protobuf.IDescriptorProto[]|null);
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);
            service?: (google.protobuf.IServiceDescriptorProto[]|null);
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);
            options?: (google.protobuf.IFileOptions|null);
            source_code_info?: (google.protobuf.ISourceCodeInfo|null);
            syntax?: (string|null);
        }

        class FileDescriptorProto implements IFileDescriptorProto {
            constructor(properties?: google.protobuf.IFileDescriptorProto);
            public name: string;
            public package: string;
            public dependency: string[];
            public public_dependency: number[];
            public weak_dependency: number[];
            public message_type: google.protobuf.IDescriptorProto[];
            public enum_type: google.protobuf.IEnumDescriptorProto[];
            public service: google.protobuf.IServiceDescriptorProto[];
            public extension: google.protobuf.IFieldDescriptorProto[];
            public options?: (google.protobuf.IFileOptions|null);
            public source_code_info?: (google.protobuf.ISourceCodeInfo|null);
            public syntax: string;
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IDescriptorProto {
            name?: (string|null);
            field?: (google.protobuf.IFieldDescriptorProto[]|null);
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);
            nested_type?: (google.protobuf.IDescriptorProto[]|null);
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);
            extension_range?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);
            oneof_decl?: (google.protobuf.IOneofDescriptorProto[]|null);
            options?: (google.protobuf.IMessageOptions|null);
            reserved_range?: (google.protobuf.DescriptorProto.IReservedRange[]|null);
            reserved_name?: (string[]|null);
        }

        class DescriptorProto implements IDescriptorProto {
            constructor(properties?: google.protobuf.IDescriptorProto);
            public name: string;
            public field: google.protobuf.IFieldDescriptorProto[];
            public extension: google.protobuf.IFieldDescriptorProto[];
            public nested_type: google.protobuf.IDescriptorProto[];
            public enum_type: google.protobuf.IEnumDescriptorProto[];
            public extension_range: google.protobuf.DescriptorProto.IExtensionRange[];
            public oneof_decl: google.protobuf.IOneofDescriptorProto[];
            public options?: (google.protobuf.IMessageOptions|null);
            public reserved_range: google.protobuf.DescriptorProto.IReservedRange[];
            public reserved_name: string[];
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            interface IExtensionRange {
                start?: (number|null);
                end?: (number|null);
            }

            class ExtensionRange implements IExtensionRange {
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);
                public start: number;
                public end: number;
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IReservedRange {
                start?: (number|null);
                end?: (number|null);
            }

            class ReservedRange implements IReservedRange {
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);
                public start: number;
                public end: number;
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface IFieldDescriptorProto {
            name?: (string|null);
            number?: (number|null);
            label?: (google.protobuf.FieldDescriptorProto.Label|null);
            type?: (google.protobuf.FieldDescriptorProto.Type|null);
            type_name?: (string|null);
            extendee?: (string|null);
            default_value?: (string|null);
            oneof_index?: (number|null);
            json_name?: (string|null);
            options?: (google.protobuf.IFieldOptions|null);
        }

        class FieldDescriptorProto implements IFieldDescriptorProto {
            constructor(properties?: google.protobuf.IFieldDescriptorProto);
            public name: string;
            public number: number;
            public label: google.protobuf.FieldDescriptorProto.Label;
            public type: google.protobuf.FieldDescriptorProto.Type;
            public type_name: string;
            public extendee: string;
            public default_value: string;
            public oneof_index: number;
            public json_name: string;
            public options?: (google.protobuf.IFieldOptions|null);
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        interface IOneofDescriptorProto {
            name?: (string|null);
            options?: (google.protobuf.IOneofOptions|null);
        }

        class OneofDescriptorProto implements IOneofDescriptorProto {
            constructor(properties?: google.protobuf.IOneofDescriptorProto);
            public name: string;
            public options?: (google.protobuf.IOneofOptions|null);
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IEnumDescriptorProto {
            name?: (string|null);
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);
            options?: (google.protobuf.IEnumOptions|null);
        }

        class EnumDescriptorProto implements IEnumDescriptorProto {
            constructor(properties?: google.protobuf.IEnumDescriptorProto);
            public name: string;
            public value: google.protobuf.IEnumValueDescriptorProto[];
            public options?: (google.protobuf.IEnumOptions|null);
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IEnumValueDescriptorProto {
            name?: (string|null);
            number?: (number|null);
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);
            public name: string;
            public number: number;
            public options?: (google.protobuf.IEnumValueOptions|null);
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IServiceDescriptorProto {
            name?: (string|null);
            method?: (google.protobuf.IMethodDescriptorProto[]|null);
            options?: (google.protobuf.IServiceOptions|null);
        }

        class ServiceDescriptorProto implements IServiceDescriptorProto {
            constructor(properties?: google.protobuf.IServiceDescriptorProto);
            public name: string;
            public method: google.protobuf.IMethodDescriptorProto[];
            public options?: (google.protobuf.IServiceOptions|null);
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IMethodDescriptorProto {
            name?: (string|null);
            input_type?: (string|null);
            output_type?: (string|null);
            options?: (google.protobuf.IMethodOptions|null);
            client_streaming?: (boolean|null);
            server_streaming?: (boolean|null);
        }

        class MethodDescriptorProto implements IMethodDescriptorProto {
            constructor(properties?: google.protobuf.IMethodDescriptorProto);
            public name: string;
            public input_type: string;
            public output_type: string;
            public options?: (google.protobuf.IMethodOptions|null);
            public client_streaming: boolean;
            public server_streaming: boolean;
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IFileOptions {
            java_package?: (string|null);
            java_outer_classname?: (string|null);
            java_multiple_files?: (boolean|null);
            java_generate_equals_and_hash?: (boolean|null);
            java_string_check_utf8?: (boolean|null);
            optimize_for?: (google.protobuf.FileOptions.OptimizeMode|null);
            go_package?: (string|null);
            cc_generic_services?: (boolean|null);
            java_generic_services?: (boolean|null);
            py_generic_services?: (boolean|null);
            deprecated?: (boolean|null);
            cc_enable_arenas?: (boolean|null);
            objc_class_prefix?: (string|null);
            csharp_namespace?: (string|null);
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
            ".scalapb.options"?: (scalapb.IScalaPbOptions|null);
        }

        class FileOptions implements IFileOptions {
            constructor(properties?: google.protobuf.IFileOptions);
            public java_package: string;
            public java_outer_classname: string;
            public java_multiple_files: boolean;
            public java_generate_equals_and_hash: boolean;
            public java_string_check_utf8: boolean;
            public optimize_for: google.protobuf.FileOptions.OptimizeMode;
            public go_package: string;
            public cc_generic_services: boolean;
            public java_generic_services: boolean;
            public py_generic_services: boolean;
            public deprecated: boolean;
            public cc_enable_arenas: boolean;
            public objc_class_prefix: string;
            public csharp_namespace: string;
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        interface IMessageOptions {
            message_set_wire_format?: (boolean|null);
            no_standard_descriptor_accessor?: (boolean|null);
            deprecated?: (boolean|null);
            map_entry?: (boolean|null);
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
            ".scalapb.message"?: (scalapb.IMessageOptions|null);
        }

        class MessageOptions implements IMessageOptions {
            constructor(properties?: google.protobuf.IMessageOptions);
            public message_set_wire_format: boolean;
            public no_standard_descriptor_accessor: boolean;
            public deprecated: boolean;
            public map_entry: boolean;
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IFieldOptions {
            ctype?: (google.protobuf.FieldOptions.CType|null);
            packed?: (boolean|null);
            jstype?: (google.protobuf.FieldOptions.JSType|null);
            lazy?: (boolean|null);
            deprecated?: (boolean|null);
            weak?: (boolean|null);
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
            ".scalapb.field"?: (scalapb.IFieldOptions|null);
        }

        class FieldOptions implements IFieldOptions {
            constructor(properties?: google.protobuf.IFieldOptions);
            public ctype: google.protobuf.FieldOptions.CType;
            public packed: boolean;
            public jstype: google.protobuf.FieldOptions.JSType;
            public lazy: boolean;
            public deprecated: boolean;
            public weak: boolean;
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        interface IOneofOptions {
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
            ".scalapb.oneof"?: (scalapb.IOneofOptions|null);
        }

        class OneofOptions implements IOneofOptions {
            constructor(properties?: google.protobuf.IOneofOptions);
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IEnumOptions {
            allow_alias?: (boolean|null);
            deprecated?: (boolean|null);
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
            ".scalapb.enum_options"?: (scalapb.IEnumOptions|null);
        }

        class EnumOptions implements IEnumOptions {
            constructor(properties?: google.protobuf.IEnumOptions);
            public allow_alias: boolean;
            public deprecated: boolean;
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IEnumValueOptions {
            deprecated?: (boolean|null);
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
            ".scalapb.enum_value"?: (scalapb.IEnumValueOptions|null);
        }

        class EnumValueOptions implements IEnumValueOptions {
            constructor(properties?: google.protobuf.IEnumValueOptions);
            public deprecated: boolean;
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IServiceOptions {
            deprecated?: (boolean|null);
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        class ServiceOptions implements IServiceOptions {
            constructor(properties?: google.protobuf.IServiceOptions);
            public deprecated: boolean;
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IMethodOptions {
            deprecated?: (boolean|null);
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        class MethodOptions implements IMethodOptions {
            constructor(properties?: google.protobuf.IMethodOptions);
            public deprecated: boolean;
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IUninterpretedOption {
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);
            identifier_value?: (string|null);
            positive_int_value?: (number|Long|null);
            negative_int_value?: (number|Long|null);
            double_value?: (number|null);
            string_value?: (Uint8Array|null);
            aggregate_value?: (string|null);
        }

        class UninterpretedOption implements IUninterpretedOption {
            constructor(properties?: google.protobuf.IUninterpretedOption);
            public name: google.protobuf.UninterpretedOption.INamePart[];
            public identifier_value: string;
            public positive_int_value: (number|Long);
            public negative_int_value: (number|Long);
            public double_value: number;
            public string_value: Uint8Array;
            public aggregate_value: string;
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            interface INamePart {
                name_part: string;
                is_extension: boolean;
            }

            class NamePart implements INamePart {
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);
                public name_part: string;
                public is_extension: boolean;
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface ISourceCodeInfo {
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        class SourceCodeInfo implements ISourceCodeInfo {
            constructor(properties?: google.protobuf.ISourceCodeInfo);
            public location: google.protobuf.SourceCodeInfo.ILocation[];
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            interface ILocation {
                path?: (number[]|null);
                span?: (number[]|null);
                leading_comments?: (string|null);
                trailing_comments?: (string|null);
                leading_detached_comments?: (string[]|null);
            }

            class Location implements ILocation {
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);
                public path: number[];
                public span: number[];
                public leading_comments: string;
                public trailing_comments: string;
                public leading_detached_comments: string[];
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface IGeneratedCodeInfo {
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        class GeneratedCodeInfo implements IGeneratedCodeInfo {
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            interface IAnnotation {
                path?: (number[]|null);
                source_file?: (string|null);
                begin?: (number|null);
                end?: (number|null);
            }

            class Annotation implements IAnnotation {
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);
                public path: number[];
                public source_file: string;
                public begin: number;
                public end: number;
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;
                public static verify(message: { [k: string]: any }): (string|null);
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface IAny {
            type_url?: (string|null);
            value?: (Uint8Array|null);
        }

        class Any implements IAny {
            constructor(properties?: google.protobuf.IAny);
            public type_url: string;
            public value: Uint8Array;
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }
}
