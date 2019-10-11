#import <Cordova/CDV.h>

@interface FirebasePlugin : CDVPlugin
+ (FirebasePlugin *) firebasePlugin;

- (void)startTrace:(CDVInvokedUrlCommand*)command;
- (void)incrementCounter:(CDVInvokedUrlCommand*)command;
- (void)stopTrace:(CDVInvokedUrlCommand*)command;
- (void)setPerformanceCollectionEnabled:(CDVInvokedUrlCommand*)command;

- (void) handlePluginExceptionWithContext: (NSException*) exception :(CDVInvokedUrlCommand*)command;
- (void) handlePluginExceptionWithoutContext: (NSException*) exception;
- (void)_logError: (NSString*)msg;

- (void)createChannel:(CDVInvokedUrlCommand *)command;
- (void)setDefaultChannel:(CDVInvokedUrlCommand *)command;
- (void)deleteChannel:(CDVInvokedUrlCommand *)command;
- (void)listChannels:(CDVInvokedUrlCommand *)command;
@property (nonatomic, copy) NSString *notificationCallbackId;
@property (nonatomic, copy) NSString *tokenRefreshCallbackId;
@property (nonatomic, retain) NSMutableArray *notificationStack;
@property (nonatomic, readwrite) NSMutableDictionary* traces;

@end
