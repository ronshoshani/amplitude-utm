amplitude-utm
=============

Add utm parameters support for Amplitude.com Analytics.

The script will retrieve all query string parameters starting with *utm* and report them as user properties to Amplitude.
You can then segment the data according to these properties.

Quick explanation about the standard utm parameters:

1. **utm_medium** - top level grouping, indicates the overall channel (PPC, E-Mail, etc).
2. **utm_source** - the provider within the channel that brought the traffic (AdWords, Newsletter, etc).
3. **utm_campaign** - your marketing campaign.
4. **utm_content** - you can use this to differentiate between variations in content and message of your campaign.

In order to use the script, just add to your project and make sure that it is included after the code which loads the Amplitude Javascript library.
