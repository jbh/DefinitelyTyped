/*!
* Dynamsoft Barcode Reader JavaScript Intellisense
* Product: Dynamsoft Barcode Reader
* Web Site: http://www.dynamsoft.com
*
* Copyright 2017 Dynamsoft Corporation. All rights reserved.
* Author: Dynamsoft Support Team
* Version: 5.2
*/

/**
 *
 * @namespace dynamsoft
 */
declare namespace dynamsoft {
  namespace dbrEnv {
    let productKey: string;
    let resourcesPath: string;
    let versionInfo: string;

    function init(onSuccess: () => void, onError: (errorCode: number, errorString: string) => void): void;
    function BarcodeReader(): void;
    function ReadResult(): ReadResult;
  }
}

/// <field type="namespace">An enumeration that describes all the errors defined in Dynamsoft Barcode Reader.</field>
declare enum EnumDBRErrorCode {
  /// Successful.
  OK = 0,
  /// One or more parameters are missing.
  ParameterNumberUnmatched = -1001,
  /// The type of parameter [parameter name] is invalid.
  TypeNotValid = -1002,
  /// The value of parameter [parameter name] is out of range.
  ValueOutOfRange = -1003,
  /// The value of parameter [parameter name] is invalid.
  ValueNotValid = -1008,
  /// The server returned the error code [HTTP_status_codes].
  HttpError = -1012,
  /// The domain of your current site does not match the domain bound in the current product key, please contact the site administrator.
  LicenseDomainInvalid = -1015,
  /// The conversion to base64 string failed.
  ConversionFailed = -1028,
  /// Failed to parse json string.
  JsonParseFailed = -1029,
  /// Failed to download the DBR module. Please check the network connection and try again later.
  DownloadDBRModuleFailed = -4001,
  /// Failed to send the DBR module to Dynamsoft Service. Please check the network connection and try again later.
  SendDBRModuleFailed = -4002,
  /// Failed to connect to the DBR module. Please check the network connection and try again later.
  ConnectDBRModuleFailed = -4003,
  /// Unknown error.
  Unknown = -10000,
  /// Not enough memory.
  NoMemory = -10001,
  /// The object isn't set to an instance.
  NullReference = -10002,
  /// License is expired.
  LicenseExpired = -10004,
  /// The file type to decode is not supported.
  FileTypeNotSupported = -10006,
  /// Index is invalid.
  IndexInvalid = -10008,
  /// Barcode format is invalid
  BarcodeFormatInvalid = -10009,
  /// Barcode custom region to decode is invalid.
  CustomedRegionInvalid =-10010,
  /// The maximum barcode number is invalid.
  MaxBarcodeNumberInvalid =-10011,
  /// Read image fails.
  ImageReadFailed = -10012,
  /// Read TIFF type image fails.
  TiffReadFailed = -10013,
  /// You do not have a valid QR Barcode license.
  LicenseQRInvalid = 10016,
  /// You do not have a valid 1D Barcode license.
  License1DInvalid = -10017,
  /// You do not have a valid PDF417 barcode license.
  LicensePDF417Invalid =-10019,
  /// You do not have a valid DATAMATRIX barcode license.
  LicenseDataMatrixInvalid =-10020,
  /// Invalid DIB Buffer.
  DIBBufferInvalid = -10018,
  /// The page number is invalid.
  PageNumberInvalid = -10023,
  /// Recognition timeout.
  RecognitionTimeout = -10026,
  /// ([service internal code])[error string returned from service].
  ServiceInternalError = -20000
}

/// <field type="namespace">An enumeration that describes all supported barcode formats.</field>
declare enum EnumBarcodeFormat {
  /// All supported formats
  EBF_All = 0,
  /// 1d barcode
  EBF_OneD = 1023,
  /// Code 39
  EBF_CODE_39 = 1,
  /// Code 128
  EBF_CODE_128 = 2,
  /// Code 93
  EBF_CODE_93 = 4,
  /// Codabar
  EBF_CODABAR = 8,
  /// Interleaved 2 of 5
  EBF_ITF = 16,
  /// EAN-13
  EBF_EAN_13 = 32,
  /// EAN-8
  EBF_EAN_8 = 64,
  /// UPC-A
  EBF_UPC_A = 128,
  /// UPC-E
  EBF_UPC_E = 256,
  /// Industrial 2 of 5
  EBF_INDUSTRIAL_25 = 512,
  /// PDF417
  EBF_PDF417 = 33554432,
  /// QR Code
  EBF_QR_CODE = 67108864,
  /// DataMatrix
  EBF_DATAMATRIX = 134217728
}

/// <field type="namespace">An enumeration that represents the type of devices you used to capture barcode images.</field>
declare enum EnumImageCaptureDevice {
  /// The image capture device type is unknown, try EICD_Scanner first and if no barcodes were found, try EICD_Fax and then EICD_Camera.
  EICD_Unknown = 0,
  /// Barcode images are captured by scanners.
  EICD_Scanner = 1,
  /// Barcode images are captured from cameras or video devices.
  EICD_Camera = 2,
  /// Barcode images are captured from faxes.
  EICD_Fax = 3
}

/// <field type="namespace">An enumeration that describes all ink colors for barcodes search.</field>
declare enum EnumBarcodeColorMode {
  /// Barcodes are printed with dark color (usually in black) on a light (usually in white) background.
  EBCM_DarkOnLight = 0,
  /// Barcodes are printed with light color (usually in white) on a dark (usually in black) background.
  EBCM_LightOnDark = 1,
  /// Both of the DarkOnLight and LightOnDark
  EBCM_DarkAndLight = 2
}

/// <field type="namespace">An enumeration that represents the text encoding types of 2D barcodes.</field>
declare enum EnumBarcodeTextEncoding {
  /// By Windows System Code Page(For CN: 936)
  EBTE_Default = 0,
  /// Japanese
  EBTE_SHIFT_JIS_932 = 932,
  /// Simple Chinese
  EBTE_GB2312_936 = 936,
  /// Korean
  EBTE_Korean_949 = 949,
  /// Traditional Chinese
  EBTE_BIG5_950 = 950,
  /// UTF16
  EBTE_UTF16 = 1200,
  /// UTF16 big endian
  EBTE_UTF16BE = 1201,
  /// UTF8
  EBTE_UTF8 = 65001
}

/// <field type="namespace">An enumeration that represents the orientation type of the barcodes.</field>
declare enum EnumBarcodeOrientationType {
  /// Barcodes with a horizontal orientation will be searched.
  EBOT_Horizontal = 0,
  /// Barcodes with a vertical orientation will be searched.
  EBOT_Vertical = 1
}

/// <field type="namespace">An enumeration that represents the scan regions for barcode reading.</field>
declare enum EnumScanRegionSide {
  /// The barcode reading will be performed on the left side of the image in %.
  ESRS_Left = 0,
  /// The barcode reading will be performed on the top side of the image in %.
  ESRS_Top = 1,
  /// The barcode reading will be performed on the right side of the image in %.
  ESRS_Right = 2,
  /// The barcode reading will be performed on the bottom side of the image in %.
  ESRS_Bottom = 3
}

interface BarcodeReader {
  useOneDDeblur: boolean;
  imageCaptureDevice: EnumImageCaptureDevice;
  barcodeFormats: number;
  maxBarcodesNumPerPage: number;
  timeoutPerPage: number;
  barcodeColorMode: EnumBarcodeColorMode;
  barcodeTextEncoding: EnumBarcodeTextEncoding;

  addPages(arrPages: Array<any>): boolean;
  clearAllPages(): void;
  // TODO: Fix addRegion. It has two different definitions with different parameters.
  // addRegion(): boolean;
  clearAllRegions(): void;
  addAngleRange(fromAngle: number, toAngle: number): boolean;
  addAngle(emOrient: EnumBarcodeOrientationType): boolean;
  clearAllAngles(): void;
  readURL(imageUrl: string): ReadResult;
  readURLAsync(imageUrl: string, userData: any, onSuccess: (userData: any, result: ReadResult) => void, onError: (userData: any, errorCode: number, errorString: string) => void): void;
  readBinary(binary: any): ReadResult;
  readBinaryAsync(binary: any, userData: any, onSuccess: (userData: any, result: ReadResult) => void, onError: (userData: any, errorCode: number, errorString: string) => void): void;
  readBase64(base64img: string): ReadResult;
  readBase64Async(base64img: string, userData: any, onSuccess: (userData: any, result: ReadResult) => void, onError: (userData: any, errorCode: number, errorString: string) => void): void;
  getErrorCode(): number;
  getErrorString(): string;
  getCount(): number;
}

interface ReadResult {
  get(index: number): ReadResultItem;
}

interface ReadResultItem {
  format: EnumBarcodeFormat;
  formatString: string;
  text: string;
  data: string;
  angle: number;
  moduleSize: number;
  page: number;
  left: number;
  top: number;
  width: number;
  height: number;
  x1: number;
  x2: number;
  x3: number;
  x4: number;
  y1: number;
  y2: number;
  y3: number;
  y4: number;
}

// dynamsoft.dbrEnv.BarcodeReader.prototype.addRegion = function () {
  /// <signature>
  /// <summary>
  /// Adds an area of the image to the selection for barcode recognition.
  /// </summary>
  /// <param name="emSide" type="EnumScanRegionSide">The type of the area.</param>
  /// <param name="isPercentage" type="int">The percentage measured from region side based on the parameter "emSide". Allowed values range from 1 to 100.</param>
  /// <returns type="bool"></returns>
  /// </signature>
  /// <signature>
  /// <summary>
  /// Adds an area of the image to the selection for barcode recognition.
  /// </summary>
  /// <param name="left" type="int">The left-most coordinate of the area.</param>
  /// <param name="top" type="int">The top-most coordinate of the area.</param>
  /// <param name="right" type="int">The right-most coordinate of the area.</param>
  /// <param name="bottom" type="int">The bottom-most coordinate of the area.</param>
  /// <param name="isPercentage" type="bool">Indicates whether the coordinate is measured by percentage or not.</param>
  /// <returns type="bool"></returns>
  /// </signature>
// };
